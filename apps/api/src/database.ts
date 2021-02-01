import mongoose from 'mongoose'
import config from './config/config'

mongoose.connect(config.DB.URI__DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () =>{
    console.log('Mongodb connection stablished')
})

connection.once('error', err =>{
    console.log(err)
})