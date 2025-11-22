package config

import (
	"fmt"
	"log"

	"github.com/ariskaAdi/backend-ecommerce/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func LoadDB() {
	fmt.Printf("DSN Check: Host=%s, Port=%s, User=%s\n", ENV.DB_HOST, ENV.DB_PORT, ENV.DB_USERNAME)
	connectionStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", 
	ENV.DB_HOST, ENV.DB_PORT, ENV.DB_USERNAME, ENV.DB_PASSWORD, ENV.DB_DATABASE)
	db, err := gorm.Open(postgres.Open(connectionStr),&gorm.Config{})

	if err != nil {
		
		panic(err)
	}

	DB = db 
}

func RunMigrations() {
	if DB == nil {
		log.Fatal("Tidak ada koneksi database")
	}

    err := DB.AutoMigrate(&model.User{}) 
    if err != nil {
        log.Fatal("Gagal migrasi database:", err)
    }

	log.Println("migrasi berhasil")
}