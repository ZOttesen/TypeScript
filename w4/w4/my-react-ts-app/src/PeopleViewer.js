"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PeopleViewer = ({ people }) => {
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>city</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person) => <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.city}</td>
                </tr>)}
            </tbody>
        </table>
    </div>);
};
exports.default = PeopleViewer;
