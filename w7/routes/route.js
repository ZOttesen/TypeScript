"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const personController_1 = __importDefault(require("../controllers/personController"));
const personRouter = express.Router();
personRouter.route('/').get(personController_1.default.getAllPeople).post(personController_1.default.createPerson);
personRouter.route('/:id').get(personController_1.default.getPersonById).put(personController_1.default.updatePerson).delete(personController_1.default.deletePerson).delete(personController_1.default.deletePerson);
exports.default = personRouter;
