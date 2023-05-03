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
    createdAt: {
        type: Date,
        default: Date.now,
        select: false,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },

    reviews: Array
});

PersonSchema.pre(/^find/, function (next) {
    this.populate({
        path: "address"
    });
    next();
});

const PersonModel = mongoose.model("Person", PersonSchema);

export default PersonModel;