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
const react_1 = require("react");
require("./App.css");
const PeopleViewer_1 = __importDefault(require("./PeopleViewer"));
const AddPerson_1 = __importDefault(require("./AddPerson"));
const DeletePerson_1 = __importDefault(require("./DeletePerson"));
const SortPeople_1 = __importDefault(require("./SortPeople"));
const EditPerson_1 = __importDefault(require("./EditPerson"));
function App() {
    const [name, setName] = (0, react_1.useState)("");
    const [people, setPerson] = (0, react_1.useState)([]);
    const fetchPeople = () => __awaiter(this, void 0, void 0, function* () {
        const peoples = yield fetch("http://localhost:3008/person");
        const data = yield peoples.json();
        setPerson(data);
    });
    (0, react_1.useEffect)(() => {
        fetchPeople();
    }, []);
    return (<div className="App">
    <PeopleViewer_1.default people={people}/>
    <AddPerson_1.default setPeople={setPerson} people={people}/>
    <DeletePerson_1.default setPeople={setPerson} people={people}/>
    <SortPeople_1.default setPeople={setPerson} people={people}/>
    <EditPerson_1.default setPeople={setPerson} people={people}/>
    </div>);
}
exports.default = App;
