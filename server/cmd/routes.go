package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/lucasmcclean/personal-website/server/database"
	"github.com/lucasmcclean/personal-website/server/models"
)

func initializeRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Testing...")
	})

	app.Post("/create-post", func (c *fiber.Ctx) error {
		post := new(models.Post)
		if err := c.BodyParser(post); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": err.Error(),
			})
		}
		database.DB.DB.Create(&post)

		return c.Status(200).JSON(post)
	})
}