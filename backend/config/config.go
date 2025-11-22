package config

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/spf13/viper"
)

type Config struct {
	PORT        string `mapstructure:"PORT"`
    DB_HOST     string `mapstructure:"DB_HOST"`
    DB_USERNAME string `mapstructure:"DB_USERNAME"`
    DB_PASSWORD string `mapstructure:"DB_PASSWORD"`
    DB_PORT     string `mapstructure:"DB_PORT"` 
    DB_DATABASE string `mapstructure:"DB_DATABASE"`
}

var ENV *Config

func LoadConfig() {
	if err := godotenv.Load(".env"); err != nil {
		panic (err)
	}
    
	viper.AutomaticEnv()
	 keys := []string{
        "PORT",
        "DB_HOST",
        "DB_USERNAME",
        "DB_PASSWORD",
        "DB_PORT",
        "DB_DATABASE",
    }

    for _, key := range keys {
        viper.BindEnv(key)
    }

    ENV = &Config{}
    
	if err := viper.Unmarshal(ENV); err != nil {
		panic(err)
	}
    
	log.Println("Konfigurasi berhasil dimuat.")
	log.Println("Cek ENV:", ENV)

}