/**
 * @author: Árpád Gábor Bondor
 * @description: Contact Schema taken from my previous portfolio project
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
  url: String,
  alt: String,
});

const CardParagraphSchema = new Schema({
  type: String,
  sentences: [String], // "typing"
  badges: [BadgeSchema],
  text: String, // "link", "text"
  width: String, // "image"
  height: String, // "image"
  maxWidth: String, // "image"
  maxHeight: String, // "image"
  src: String, // "image"
  alt: String, // "image"
  style: String, // "image"
  href: String, // "link"
});

const CardSchema = new Schema({ p: [CardParagraphSchema] });

const ParagraphSchema = new Schema({
  type: String,
  sentences: [String], // "typing"
  badges: [BadgeSchema],
  text: String, // "link", "text"
  width: String, // "image"
  height: String, // "image"
  maxWidth: String, // "image"
  maxHeight: String, // "image"
  src: String, // "image"
  alt: String, // "image"
  style: String, // "image"
  href: String, // "link"
  cards: [CardSchema],
});

const PageSchema = new Schema({
  page: String,
  page_type: String,
  hero: {
    h1: String,
    small: String,
    p: [ParagraphSchema],
    img_url: String,
  },
  content: [
    {
      h2: String,
      small: String,
      p: [ParagraphSchema],
      read_more: String,
      background_img_url: String,
      img_src: String,
    },
  ],
});
const Page = mongoose.model('Page', PageSchema);

async function addPage(page, hero, content) {
  const newPage = new Page({
    page: page,
    hero: hero,
    content: content,
  });

  let saved = await newPage.save();
}

async function get(page) {
  return Page.findOne({ page: page });
}

module.exports = {
  model: Page,
  addPage: addPage,
  get: get,
};
