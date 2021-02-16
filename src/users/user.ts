import * as mongoose from 'mongoose'

interface IUser {
    _id?: string;
    email: string;
    name: string;
}

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
}, { timestamps: true })

const User = mongoose.model('User', schema);

export { User, IUser }