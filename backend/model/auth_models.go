package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name     string `gorm:"type:varchar(100);not null"`
	Email    string `gorm:"uniqueIndex;not null"`
	Password string `gorm:"not null"`
	Gender   string
}


