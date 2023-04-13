"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const logger_1 = __importDefault(require("./src/utillity/logger"));
const app = express();
app.use(express.json()); //body parser for json
app.use(express.static(`${__dirname}/public`));
if (process.env.NODE_env === 'development') {
    app.use(morgan('dev'));
    console.log("Development mode");
}
app.get("/people", (req, res) => {
    try {
        const people = fs.readFileSync(`./src/people.json`, "utf-8");
        res.status(200)
            .json({
            status: "succes",
            data: JSON.parse(people)
        });
        logger_1.default.info("People data sent");
    }
    catch (err) {
        res.status(404)
            .json({
            status: "fail",
            data: "Person not found"
        });
        logger_1.default.error(err.message + " Person not found");
    }
});
app.get("/people/:id", (req, res) => {
    try {
        const people = fs.readFileSync(`./src/people.json`, "utf-8");
        const person = JSON.parse(people)["person"].find((person) => person.id === parseInt(req.params.id));
        res.status(200)
            .json({
            status: "succes",
            data: person
        });
        logger_1.default.info("Person data sent");
    }
    catch (err) {
        res.status(404)
            .json({
            status: "fail",
            data: "Person not found"
        });
        logger_1.default.error(err.message + " Person not found");
    }
});
app.post("/people", (req, res) => {
    const people = JSON.parse(fs.readFileSync(`./src/people.json`, "utf-8"));
    let newPerson = {
        id: people.person[people.person.length - 1].id + 1,
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    };
    people.person.push(newPerson);
    fs.writeFileSync(`./src/people.json`, JSON.stringify(people));
    res.status(201)
        .json({
        status: "succes",
        data: newPerson
    });
    logger_1.default.info("Person data received");
});
app.put("/people/:id", (req, res) => {
    const people = JSON.parse(fs.readFileSync(`./src/people.json`, "utf-8"));
    const person = people["person"].find((person) => person.id === parseInt(req.params.id));
    if (person) {
        person.name = req.body.name;
        person.age = req.body.age;
        person.city = req.body.city;
        fs.writeFileSync(`./src/people.json`, JSON.stringify(people));
        res.status(200)
            .json({
            status: "succes",
            data: person
        });
        logger_1.default.info("Person data edited");
    }
    else {
        res.status(404)
            .json({
            status: "fail",
            data: "Person not found"
        });
    }
});
app.patch("/people/:id", (req, res) => {
    const people = JSON.parse(fs.readFileSync(`./src/people.json`, "utf-8"));
    const person = people["person"].find((person) => person.id === parseInt(req.params.id));
    if (person) {
        req.body.name && (person.name = req.body.name);
        req.body.age && (person.age = req.body.age);
        req.body.city && (person.city = req.body.city);
        fs.writeFileSync(`./src/people.json`, JSON.stringify(people));
        res.status(200)
            .json({
            status: "succes",
            data: person
        });
        logger_1.default.info("Person data edited");
    }
    else {
        res.status(404)
            .json({
            status: "fail",
            data: "Person not found"
        });
    }
});
app.delete("/people/:id", (req, res) => {
    const people = JSON.parse(fs.readFileSync(`./src/people.json`, "utf-8"));
    const person = people["person"].find((person) => person.id === parseInt(req.params.id));
    if (person) {
        people["person"].splice(people["person"].indexOf(person), 1);
        fs.writeFileSync(`./src/people.json`, JSON.stringify(people));
        res.status(200)
            .json({
            status: "succes",
            data: person
        });
        logger_1.default.info("Person data deleted");
    }
    else {
        res.status(404)
            .json({
            status: "fail",
            data: "Person not found"
        });
    }
});
app.listen(3000, () => {
    logger_1.default.info("Server started on port http://localhost:3000");
});
