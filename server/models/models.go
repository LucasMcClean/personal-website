package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	postId string `json:"postId" gorm:"text;not null;default:null"` 
	title string `json:"title" gorm:"text;not null;default:null"`
	publishDate string `json:"publishDate" gorm:"text;not null;default:null"`
	tags []string `json:"tags" gorm:"text[];not null;default:null"`
}