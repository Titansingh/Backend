import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodo: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'SubTodo'
    }
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)