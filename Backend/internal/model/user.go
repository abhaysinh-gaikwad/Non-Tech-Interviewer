package model

import (
	"errors"
	"net/mail"
	"regexp"
	"unicode"
)

type User struct {
	ID           string `json:"id"`
	Name         string `json:"name"`
	Email        string `json:"email"`
	Mobile       string `json:"mobile"`
	LinkedInURL  string `json:"linkedin_url"`
	PasswordHash string `json:"-"`
	Role         string `json:"role"`
}

func (u *User) Validate() error {
	if _, err := mail.ParseAddress(u.Email); err != nil {
		return errors.New("invalid email format")
	}

	if !isValidMobile(u.Mobile) {
		return errors.New("invalid mobile number")
	}

	if !isValidPassword(u.PasswordHash) {
		return errors.New("password must be 8+ chars with uppercase and number")
	}

	return nil
}

func isValidMobile(mobile string) bool {
	regex := `^\+?[1-9]\d{1,14}$`
	return regexp.MustCompile(regex).MatchString(mobile)
}

func isValidPassword(password string) bool {
	var (
		hasUpper bool
		hasNumber bool
	)
	
	for _, c := range password {
		switch {
		case unicode.IsUpper(c):
			hasUpper = true
		case unicode.IsNumber(c):
			hasNumber = true
		}
	}
	return len(password) >= 8 && hasUpper && hasNumber
}