import mongoose from "mongoose";

const FurnitureSchema = mongoose.Schema({
    name: {
        type: String
    },
    buyedPrice: {
        type: Number,
        default: 0
    },
    wantedPrice: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['To give', 'To sell', 'To keep']
    },
    room: {
        type: String
    },
    note: {
        type: String
    },
    image: {
        type: String,
        default: 'urlImg'
    },
    sold: {
        type: Boolean,
        default: false
    },
    creator: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

const Furniture = mongoose.model('Furniture', FurnitureSchema);

export default Furniture;