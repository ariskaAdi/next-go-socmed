package services

import (
	"github.com/ariskaAdi/backend-ecommerce/dto"
	"github.com/ariskaAdi/backend-ecommerce/entity"
	"github.com/ariskaAdi/backend-ecommerce/errorhandler"
	"github.com/ariskaAdi/backend-ecommerce/helper"
	"github.com/ariskaAdi/backend-ecommerce/repository"
)

type AuthService interface{
	Register(req *dto.RegisterRequest) error
}

type authService struct {
	repository repository.AuthRepository
}

func NewAuthService(r repository.AuthRepository) *authService {
	return &authService{repository: r}
}


func (s *authService) Register(req *dto.RegisterRequest) error {
	if emailExist := s.repository.EmailExist(req.Email); emailExist{
		return &errorhandler.BadRequestError{Message: "email already registered"}
	}

	if req.Password != req.PasswordConfirmation {
		return &errorhandler.BadRequestError{Message: "password and password confirmation not match"}
	}

	passwordHash, err := helper.HashPassword(req.Password)
	if err != nil {
		return &errorhandler.InternalServerError{Message: err.Error()}
	}

	user := entity.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: passwordHash,
		Gender:   req.Gender,
	}

	if err := s.repository.Register(&user); err != nil {
		return &errorhandler.InternalServerError{Message: err.Error()}
	}
	return nil
}