package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/lucasmcclean/personal-website/server/database"
)

func main() {
	database.ConnectDB()

    app := fiber.New()
		app.Use(cors.New())

		initializeRoutes(app)

    app.Listen(":3000")
}