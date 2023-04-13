"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const EditPerson = ({ setPeople, people }) => {
    const [inputs, setInputs] = (0, react_1.useState)({ uidi: 0, namei: "", agei: 0, cityi: "" });
    const [uidi, setUidi] = (0, react_1.useState)(0);
    const [namei, setName] = (0, react_1.useState)("");
    const [agei, setAge] = (0, react_1.useState)(0);
    const [cityi, setCity] = (0, react_1.useState)("");
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const PersonChange = {
            id: uidi,
            name: namei,
            age: agei,
            city: cityi
        };
        yield fetch(`http://localhost:3008/person/${PersonChange.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(PersonChange)
        });
        const newList = [...people];
        newList[PersonChange.id - 1] = PersonChange;
        setPeople(newList);
    });
    return (<div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input value={uidi} onChange={(e) => setUidi(parseInt(e.target.value))} required type="number" name="uidi" placeholder='uid'/>
                <input value={namei} onChange={(e) => setName(e.target.value)} required type="text" name="namei" placeholder='name'/>
                <input value={agei} onChange={(e) => setAge(parseInt(e.target.value))} required type="number" name="agei" placeholder='age'/>
                <input value={cityi} onChange={(e) => setCity(e.target.value)} required type="text" name="ciryi" placeholder='city'/>
                <button type="submit">Add person</button>
            </form>
        </div>);
};
exports.default = EditPerson;
