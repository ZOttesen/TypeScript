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
const react_1 = __importDefault(require("react"));
const DeletePerson = ({ setPeople, people }) => {
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const response = yield fetch('http://localhost:3008/person');
        const data = yield response.json();
        const lastObject = data[data.length - 1];
        yield fetch(`http://localhost:3008/person/${lastObject.id}`, {
            method: 'DELETE',
        });
        const arr = people.filter(el => el.id != lastObject.id);
        setPeople(arr);
    });
    return (<div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">delete person</button>
            </form>
        </div>);
};
exports.default = DeletePerson;
