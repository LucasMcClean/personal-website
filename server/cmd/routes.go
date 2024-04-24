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
		err := c.BodyParser(post)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": err.Error(),
			})
		}
		database.DB.DB.Create(&post)
		return c.Status(200).JSON(post)
	})

	app.Get("/posts", func(c *fiber.Ctx) error {
		var posts []models.Post
		result := database.DB.DB.Select("title", "publish_date", "post_slug", "description", "tags", "content").Find(&posts)
		if result.Error != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": result.Error,
			})
		}
		return c.Status(200).JSON(posts)
	})

	app.Get("/posts/:slug", func(c *fiber.Ctx) error {
		var post models.Post
		result := database.DB.DB.Where(&models.Post{PostSlug: c.Params("slug")}).First(&post)
		if result.Error != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": result.Error,
			})
		} else if result.RowsAffected == 0 {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"message": "The request post could not be found.",
			})
		}
		return c.Status(200).JSON(post)
	})
}