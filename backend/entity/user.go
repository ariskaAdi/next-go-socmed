package entity

import "time"

type User struct {
	ID        uint      `gorm:"primaryKey;autoIncrement"`
	Name      string    `gorm:"type:varchar(100)"`
	Email     string    `gorm:"uniqueIndex;type:varchar(100)"`
	Password  string    `gorm:"type:varchar(255)"`
	Gender    string    `gorm:"type:varchar(10)"`
	CreatedAt time.Time
	UpdatedAt time.Time
}