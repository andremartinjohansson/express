var express = require('express');
var router = express.Router();

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

module.exports = router;
