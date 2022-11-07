/**
 * @author: Árpád Gábor Bondor
 * @description: Contact Schema taken from my previous portfolio project
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParagraphSchema = new Schema({
    type: String,
    sentences: [String], // "typing"
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

const PageSchema = new Schema({
    page: String,
    page_type: String,
    hero: {
        h1: String,
        small: String,
        p: [ParagraphSchema],
    },
    content: [
        {
            h2: String,
            small: String,
            p: [String],
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
