"use strict";

var express = require('express');
var router = express.Router();

const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/cars";
const db = require("../src/mongodb/mongodb.js").mongoDB(dsn, 'cars');

router.post("/insert", async (req, res) => {
    var item = {
        make: req.body.make,
        model: req.body.model,
        submodel: req.body.submodel,
        year: req.body.year
    };

    try {
        await db.insert(item);
        res.redirect('back');
    } catch (err) {
        console.log(err);
    }
});

router.post("/delete", async (req, res) => {
    try {
        await db.delete(req.body.id);
        res.redirect('back');
    } catch (err) {
        console.log(err);
    }
});

router.post("/reset", async (req, res) => {
    try {
        await db.reset();
        await db.close();
        res.redirect('back');
    } catch (err) {
        console.log(err);
    }
});

router.post("/update", async (req, res) => {
    var item = {
        make: req.body.make,
        model: req.body.model,
        submodel: req.body.submodel,
        year: req.body.year
    };

    try {
        await db.update(req.body.id, item);
        res.redirect('/crud');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
