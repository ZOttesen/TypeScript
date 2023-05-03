import PersonModel from '../models/personModel';
import AddressModel from "../models/adressModel";
import {Person, Address} from "../types";
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
        addPerson: async (_parent: never, args: Person, _context: never, _info: never ) => {
            return await PersonModel.create(args);
        },
        deletePerson: async (_parent: never, args: Person, _context: never, _info: never ) => {
            return await PersonModel.findByIdAndDelete(args.id);
        },
        updatePerson: async (_parent: never, args: Person, _context: never, _info: never ) => {
            return await PersonModel.find(args.id)
        },


        addAddress: async (_parent: never, args: Address, _context: never, _info: never ) => {
            PersonModel.findById(args.person.id);
            const address = await AddressModel.create(args)
            await PersonModel.findByIdAndUpdate(args.person.id, {address: args.address});
            return address;
        },
        deleteAddress: async (_parent: never, args: Address, _context: never, _info: never ) => {
            return await AddressModel.findByIdAndDelete(args.person.id);
        },
        updateAddress: async (_parent: never, args: Address, _context: never, _info: never ) => {
            return await AddressModel.find(args.person.id)
        }
    }
};