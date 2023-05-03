import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Person",
        required: [true, "Please provide a person"],
    },
    address: {
        type: String,
        trim: true,
        required: [true, "Please provide an address"],
        maxLength: [20, "Address cannot be more than 20 characters"],
        minLength: [2, "Address cannot be less than 2 characters"],
    },
    city: {
        type: String,
        trim: true,
        required: [true, "Please provide a city"],
        maxLength: [20, "City cannot be more than 20 characters"],
        minLength: [2, "City cannot be less than 2 characters"],
    },

    reviews: Array
});

const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;