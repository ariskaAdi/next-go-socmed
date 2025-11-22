package main

import (
	"fmt"

	"github.com/ariskaAdi/backend-ecommerce/config"
	"github.com/gin-gonic/gin"
)

func main() {

	config.LoadConfig()
	config.LoadDB()

	router := gin.Default()

	api := router.Group("/api")
	api.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	router.Run(fmt.Sprintf(":%v", config.ENV.PORT))
}