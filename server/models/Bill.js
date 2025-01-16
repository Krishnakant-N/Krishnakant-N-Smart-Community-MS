import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
    
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    due_date: {
        type: Date,
        default: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    status: {
        type: String,
        enum: ['paid', 'unpaid'],
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);

export default Bill;
