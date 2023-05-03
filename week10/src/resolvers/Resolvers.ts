import PersonModel from '../models/personModel';
import AddressModel, {getAddressResidents} from "../models/adressModel";
import {Person, Address, combinedID, ID, Args} from "../types";

export default {
    Query: {
        person: async (_parent: never, _args: never, _context: never, _info: never ) => {
            return await PersonModel.find();
        },
        address: async (parent: Person) => {
            return await AddressModel.find();
        }
    },
    Mutation: {
        addPerson: async (_parent: never, {input}:Args, _context: never, _info: never ) => {
            if('name' in input && 'age' in input){
                const person = await PersonModel.create(input);
                return person;
            }
        },
        deletePerson: async (_parent: never, {id}:Args , _context: never, _info: never ) => {
            return await PersonModel.findByIdAndDelete(id);
        },
        updatePerson: async (_parent: never, {id, input}:Args, _context: never, _info: never ) => {
            if('name' in input) {
                return await PersonModel.findByIdAndUpdate(id, input);
            }
        },

        findPersonOnAddress: async (_parent: never, {id}:Args, _context: never, _info: never ) => {
            const people = await getAddressResidents(id)
            console.log(people);
            return people;
        },


        addAddress: async (_parent: never, args: Address, _context: never, _info: never ) => {
            return await AddressModel.create(args);
        },
        deleteAddress: async (_parent: never, args: Address, _context: never, _info: never ) => {
            return await AddressModel.findByIdAndDelete(args._id);
        },
        updateAddress: async (_parent: never, args: Address, _context: never, _info: never ) => {
            return await AddressModel.find(args._id)
        },

        //Add an address to a person
        addAddressToPerson: async (_parent: never, args: combinedID, _context: never, _info: never ) => {
            const address = await AddressModel.findById(args.addressId);
            const person = await PersonModel.findByIdAndUpdate(args.personId, {address})
            await AddressModel.findByIdAndUpdate(args.addressId, {person})
            return person;
        },
    }
};