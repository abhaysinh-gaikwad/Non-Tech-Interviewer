package repository

import (
	"context"
	"errors"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
	"your-project/internal/model"
)

func CreateUser(db *pgxpool.Pool, user *model.User, hashedPassword string) error {
	query := `
		INSERT INTO users (name, email, mobile, linkedin_url, password_hash, role)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id
	`

	err := db.QueryRow(
		context.Background(),
		query,
		user.Name, user.Email, user.Mobile, user.LinkedInURL, hashedPassword, user.Role,
	).Scan(&user.ID)

	if err != nil {
		if pgErr, ok := err.(*pgconn.PgError); ok && pgErr.Code == "23505" {
			return errors.New("email already exists")
		}
		return err
	}
	return nil
}

func GetUserByEmail(db *pgxpool.Pool, email string) (*model.User, error) {
	query := `
		SELECT id, name, email, mobile, linkedin_url, password_hash, role
		FROM users
		WHERE email = $1
	`

	var user model.User
	err := db.QueryRow(context.Background(), query, email).Scan(
		&user.ID, &user.Name, &user.Email, &user.Mobile, 
		&user.LinkedInURL, &user.PasswordHash, &user.Role,
	)

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, errors.New("user not found")
		}
		return nil, err
	}
	return &user, nil
}