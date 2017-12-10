"use strict";

var express = require('express');
var router = express.Router();

const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/cars";
const db = require("../src/mongodb.js").mongoDB(dsn, 'cars');

router.get("/", (req, res) => {
    res.render("home", {
        title: "André Johansson",
        file: "../content/home.md"
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        file: "../content/about.md"
    });
});

router.get("/report", (req, res) => {
    res.render("report", {
        title: "Reports",
        file: "../content/report.md"
    });
});

router.get("/app", (req, res) => {
    res.render("app", {
        title: "Chat Application",
        file: "../content/app.md"
    });
});

router.get("/chat", (req, res) => {
    res.render("chat", {
        title: "Chat",
        basedir: './static/'
    });
});

router.get("/crud", async (req, res) => {
    const data = await db.get();

    await db.close();
    res.render("crud", {
        title: "Crud",
        items: data
    });
});

router.post("/crud/edit", (req, res) => {
    res.render("edit", {
        title: "Crud Edit",
        item: req.body
    });
});

module.exports = router;
