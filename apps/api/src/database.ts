import mongoose, { ConnectOptions } from 'mongoose'
import config from './config/config'

const dbOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
}

mongoose.connect(config.DB.URI__DB, dbOptions)

const connection = mongoose.connection

connection.once('open', () =>{
    console.log('Mongodb connection stablished')
})

connection.once('error', err =>{
    console.log(err)
})