import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://puneeth:puneeth@next-todo-app.flfz4.mongodb.net/next-todo-app');
    console.log('Connected to MongoDB')
}