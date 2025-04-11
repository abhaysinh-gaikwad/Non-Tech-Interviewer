package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"your-project/api"
	"your-project/internal/handler"
	"your-project/pkg/config"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// Load config
	cfg := config.LoadConfig()

	// Initialize DB
	db, err := pgxpool.New(context.Background(), cfg.DBURL)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	defer db.Close()

	// Setup router
	router := api.SetupRouter(db, cfg.JWTSecret)

	// Start server
	log.Printf("Server running on :%s", cfg.Port)
	http.ListenAndServe(fmt.Sprintf(":%s", cfg.Port), router)
}