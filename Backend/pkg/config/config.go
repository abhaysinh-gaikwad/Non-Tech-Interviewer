package config

import "os"

type Config struct {
	Port      string
	DBURL     string
	JWTSecret string
}

func LoadConfig() *Config {
	return &Config{
		Port:      getEnv("PORT", "8080"),
		DBURL:     getEnv("DB_URL", "postgres://user:pass@localhost:5432/dbname"),
		JWTSecret: getEnv("JWT_SECRET", "default_secret"),
	}
}

func getEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return defaultValue
}

func InitDB(dbURL string) (*pgxpool.Pool, error) {
	return pgxpool.New(context.Background(), dbURL)
}