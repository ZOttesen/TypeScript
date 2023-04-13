"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_1 = __importDefault(require("./people"));
const peopleList_1 = require("./peopleList");
const container = document.getElementById('app');
const people = (0, people_1.default)();
(0, peopleList_1.renderPeopleList)(container, await people);
