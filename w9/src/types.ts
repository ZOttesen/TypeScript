import  mongoose  from 'mongoose';

export type Person = {
    id: mongoose.Types.ObjectId,
    name: string,
    age: number,
    createdAt: Date;
}

export type Address = {
    person: Person,
    address: string,
    city: string,
}