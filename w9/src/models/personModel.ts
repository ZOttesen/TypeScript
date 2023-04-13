import mongoose from "mongoose";


const PersonSchema = new mongoose.Schema({
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

const PersonModel = mongoose.model("Person", PersonSchema);

export default PersonModel;