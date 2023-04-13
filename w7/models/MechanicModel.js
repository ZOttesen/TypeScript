"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const slugify_1 = __importDefault(require("slugify"));
const mechanicModel = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        trim: true,
        required: [true, "A mechanic must have a first name"],
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, 'A mechanic must have a last name']
    },
    email: {
        type: String,
        validate: {
            validator: function (email) {
                return /[a-z0-9]+@[a-z+\.[a-z]{2,3}/.test(email);
            },
            message: (props) => `${props.value} is not a valid email address`,
        },
        required: [true, 'Email address validation falied'],
        unique: true,
        lowercase: true,
    },
    role: {
        type: String,
        enum: ['mechanic-intern', 'admin'],
        default: 'admin',
    },
    password: {
        type: String,
        require: [true, 'please provide a password'],
        minLength: [8, 'puha'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        select: false,
    },
    Person: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Person',
        required: [true, 'A mechanic must be a person']
    },
    slug: String,
});
mechanicModel.pre('save', function (next) {
    this.slug = (0, slugify_1.default)(this.firstname, { lower: true });
    next();
});
mechanicModel.pre(/^find/, function (next) {
    this.populate({
        path: 'Person',
    });
    next();
});
