package router

import (
	"github.com/ariskaAdi/backend-ecommerce/config"
	"github.com/ariskaAdi/backend-ecommerce/handler"
	"github.com/ariskaAdi/backend-ecommerce/repository"
	"github.com/ariskaAdi/backend-ecommerce/services"
	"github.com/gin-gonic/gin"
)

func AuthRouter(api *gin.RouterGroup) {
	authRepository := repository.NewAuthRepository(config.DB)
	authService := services.NewAuthService(authRepository)
	authHandler := handler.NewAuthHandler(authService)

	api.POST("/register", authHandler.Register)
}