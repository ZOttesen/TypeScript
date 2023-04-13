import  mongoose  from 'mongoose';

export type Person = {
    id: mongoose.Types.ObjectId,
    name: string,
    age: number,
    city: string,
    createdAt: Date;
}