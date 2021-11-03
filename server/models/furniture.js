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
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['A donner', 'A vendre', 'A garder']
    },
    room: {
        type: String
    },
    image: {
        type: String,
        default: 'urlImg'
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