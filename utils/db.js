import mongoose from "mongoose";

let connection={}
async function connectDB(){
    if(connection.isConnected){
        console.log('Already connected to database');
    }
    if(mongoose.connections.length>0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log("use previous connection to the database");
            return
        }
        await mongoose.disconnect();
    }
    mongoose.set('strictQuery',true);
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log("New connection to the database")
    connection.isConnected= mongoose.connections[0].readyState
}
async function disconnectDB(){
    if(connection.isConnected){
        if(process.env.NODE_ENV=== 'production'){
            await mongoose.disconnect();
            connection.isConnected= false;
        }else{
            console.log('Not disconnecting - Development Mode')
        }
    }
}
const db ={connectDB,disconnectDB}

export default db;