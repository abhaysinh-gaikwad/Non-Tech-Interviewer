package api

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jackc/pgx/v5/pgxpool"
	"your-project/internal/handler"
	"your-project/internal/middleware"
)

func SetupRouter(db *pgxpool.Pool, jwtSecret string) *chi.Mux {
	r := chi.NewRouter()

	// Middlewares
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Public routes
	r.Post("/api/v1/signup", handler.SignupHandler(db))
	r.Post("/api/v1/login", handler.LoginHandler(db, jwtSecret))

	// Protected routes
	r.Group(func(r chi.Router) {
		r.Use(middleware.JWTAuth(jwtSecret))
		r.Get("/api/v1/profile", handler.ProfileHandler)
	})

	return r
}