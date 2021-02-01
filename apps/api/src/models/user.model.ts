import { compare, compareSync, genSaltSync, hashSync } from 'bcrypt'
import { model, Schema, Document } from 'mongoose'
import passport from 'passport'

export interface IUser extends Document {
    email: string;
    password: string;
    comparePassword: (passport: string, receivedPassword:string) => Promise<Boolean>
}

const UserSchema  = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password : {
        type: String,
        required: true
    }
},
{
    versionKey: false,
    timestamps: true
})

UserSchema.pre<IUser>('save', async function (next) {
    const user = this
    if (!user.isModified('password')) return next()
    const salt = await genSaltSync(20)
    const hash = await hashSync(user.password, salt)
    user.password = hash
    next()
})
//Comparar contraseña
UserSchema.methods.comparePassword = async (password:string, receivedPassword: string): Promise<Boolean> => {
    return await compareSync(password, receivedPassword)
}
export default model<IUser>('User', UserSchema)