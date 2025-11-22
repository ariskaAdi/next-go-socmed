package handler

import (
	"net/http"

	"github.com/ariskaAdi/backend-ecommerce/dto"
	"github.com/ariskaAdi/backend-ecommerce/errorhandler"
	"github.com/ariskaAdi/backend-ecommerce/helper"
	"github.com/ariskaAdi/backend-ecommerce/services"
	"github.com/gin-gonic/gin"
)

type authHandler struct {
	services services.AuthService
}

func NewAuthHandler(s services.AuthService) *authHandler {
	return &authHandler{services: s}
}


func (h *authHandler) Register(c *gin.Context) {
	var register dto.RegisterRequest

	if err := c.ShouldBindJSON(&register); err != nil {
		errorhandler.HandleError(c, &errorhandler.BadRequestError{Message: err.Error()})
		return
	}

	if err := h.services.Register(&register); err != nil {
		errorhandler.HandleError(c, err)
		return
	}

	res := helper.Response(dto.ResponseParams{
		StatusCode: http.StatusCreated,
		Message: "Register Successfully, please login",
	})

	c.JSON(http.StatusCreated, res)
}