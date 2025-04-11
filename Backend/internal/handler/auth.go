package handler

import (
	"encoding/json"
	"net/http"
	"your-project/internal/model"
	"your-project/internal/repository"
	"your-project/pkg/utils"
)

func SignupHandler(db *pgxpool.Pool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req struct {
			Name        string `json:"name"`
			Email       string `json:"email"`
			Mobile      string `json:"mobile"`
			LinkedInURL string `json:"linkedin_url"`
			Password    string `json:"password"`
			Role        string `json:"role"`
		}

		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid request", http.StatusBadRequest)
			return
		}

		user := model.User{
			Name:        req.Name,
			Email:       req.Email,
			Mobile:      req.Mobile,
			LinkedInURL: req.LinkedInURL,
			Role:        req.Role,
		}

		if err := user.Validate(); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		hashedPassword, err := utils.HashPassword(req.Password)
		if err != nil {
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		if err := repository.CreateUser(db, &user, hashedPassword); err != nil {
			http.Error(w, err.Error(), http.StatusConflict)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(user)
	}
}

func LoginHandler(db *pgxpool.Pool, jwtSecret string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var creds struct {
			Email    string `json:"email"`
			Password string `json:"password"`
		}

		if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
			http.Error(w, "Invalid request", http.StatusBadRequest)
			return
		}

		user, err := repository.GetUserByEmail(db, creds.Email)
		if err != nil {
			http.Error(w, "Invalid credentials", http.StatusUnauthorized)
			return
		}

		if !utils.CheckPasswordHash(creds.Password, user.PasswordHash) {
			http.Error(w, "Invalid credentials", http.StatusUnauthorized)
			return
		}

		token, err := utils.GenerateJWT(user.ID, user.Role, jwtSecret)
		if err != nil {
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		response := struct {
			Token string     `json:"token"`
			User  model.User `json:"user"`
		}{
			Token: token,
			User:  *user,
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	}
}