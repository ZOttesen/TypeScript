import  mongoose  from 'mongoose';

export type Person = {
    _id?: mongoose.Types.ObjectId,
    name: string,
    age: number,
    createdAt?: Date;

    address?: Address;
}

export type Address = {
    _id?: mongoose.Types.ObjectId,
    address: string,
    city: string,
    person: Person[];
}

export type combinedID = {
    personId: mongoose.Types.ObjectId,
    addressId: mongoose.Types.ObjectId,
}

export type Args = {
    id: mongoose.Types.ObjectId,
    input: Person | Address,
}

export type ID = {
    id: mongoose.Types.ObjectId,
}

