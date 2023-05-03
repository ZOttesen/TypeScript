import mongoose from "mongoose";
import PersonModel from "./personModel";



const addressSchema = new mongoose.Schema({
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

    createdAt: {
        type: Date,
        default: Date.now,
        select: false,
    },

    reviews: Array
});

export const getAddressResidents = async (addressId) => {
    const residents = await PersonModel.find({ address: addressId }).populate(
        "address"
    );
    console.log(residents);
    return residents;
};



const AddressModel = mongoose.model("Address", addressSchema);

export default AddressModel;