"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utility/logger"));
const personModel_1 = __importDefault(require("../models/personModel"));
const getAllPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryObj = req.query;
        console.log(queryObj);
        const person = yield personModel_1.default.find(queryObj);
        res.status(200).json({
            status: 'success',
            data: person,
        });
        logger_1.default.info("All person fetched");
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
        logger_1.default.info("Could not fetch persons");
    }
});
const getPersonById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = yield personModel_1.default.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: person
        });
        logger_1.default.info("Person fetched");
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
        logger_1.default.info("Could not fetch person");
    }
});
const createPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPerson = yield personModel_1.default.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newPerson
        });
        logger_1.default.info("Person created");
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
        logger_1.default.info("Could not create person");
    }
});
const updatePerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let person = yield personModel_1.default.findById(req.params.id);
    try {
        if (person) {
            person.name = req.body.name;
            person.age = req.body.age;
            person.city = req.body.city;
        }
        res.status(200).json({
            status: 'success',
            data: person
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});
const deletePerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield personModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});
const PersonController = {
    getAllPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};
exports.default = PersonController;
