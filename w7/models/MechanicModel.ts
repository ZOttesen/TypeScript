import mongoose from "mongoose";
import Slugify from "slugify";
const mechanicModel = new mongoose.Schema(
    {
        firstname: {
            type: String,
            trim: true,
            required: [true, "A mechanic must have a first name"],
        },
        lastname:{
            type:String,
            trim:true,
            required: [true, 'A mechanic must have a last name']
        },
        email:{
            type: String,
            validate:{
                validator: function (email:string){
                    return /[a-z0-9]+@[a-z+\.[a-z]{2,3}/.test(email);
                },
                message: (props: { value: string; }) => `${props.value} is not a valid email address`,
            },
            required:[true, 'Email address validation falied'],
            unique: true,
            lowercase:true,

        },
        role: {
            type: String,
            enum: ['mechanic-intern','admin'],
            default: 'admin',
        },
        password: {
            type: String,
            require: [true, 'please provide a password'],
            minLength: [8, 'puha'],
            select: false
        },
        createdAt: {
            type: Date,
            default: Date.now,
            select: false,
        },
        Person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Person',
            required: [true, 'A mechanic must be a person']
        },
        slug: String,
    });

    mechanicModel.pre('save', function(next){
        this.slug = Slugify(this.firstname, {lower: true});
        next();
    })

    mechanicModel.pre(/^find/, function(next){
        this.populate({
            path: 'Person',
        })
        next();
    }
)