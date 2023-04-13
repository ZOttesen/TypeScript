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
const mongoose_1 = __importDefault(require("mongoose"));
const reviewModel_1 = __importDefault(require("./reviewModel"));
const PersonSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a name"],
        maxLength: [20, "Name cannot be more than 20 characters"],
        minLength: [2, "Name cannot be less than 2 characters"],
    },
    age: {
        type: Number,
        required: [true, "Please provide an age"],
        min: [1, "Age cannot be less than 1"],
        max: [100, "Age cannot be more than 100"],
    },
    city: {
        type: String,
        trim: true,
        required: [true, "Please provide a city"],
        maxLength: [20, "City cannot be more than 20 characters"],
        minLength: [2, "City cannot be less than 2 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        select: false,
    },
    reviews: Array
});
PersonSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const reviewsPromises = this.reviews.map(id => reviewModel_1.default.findById(id));
        this.reviews = yield Promise.all(reviewsPromises);
    });
});
const PersonModel = mongoose_1.default.model("Person", PersonSchema);
exports.default = PersonModel;
