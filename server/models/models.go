package models

import "gorm.io/gorm"

type Post struct {
	PostSlug string `json:"postSlug" gorm:"type:varchar(255);not null;"` 
	Title string `json:"title" gorm:"type:varchar(255);not null;"`
	PublishDate string `json:"publishDate" gorm:"type:date;not null;"`
	Tags string `json:"tags" gorm:"type:text;not null;"`
	Content string `json:"content" gorm:"type:text;not null;"`
	gorm.Model
}