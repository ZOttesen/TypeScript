import PersonModel from '../models/personModel';
import {Person} from "../types";
export default {
    Query: {
        person: async (_parent: never, _args: never, _context: never, _info: never ) => {
            return await PersonModel.find();
        },
        halfPerson: async () => {

            return await PersonModel.find();
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
        }
    }
};