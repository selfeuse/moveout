import mongoose from 'mongoose';
import Furniture from '../models/furniture.js';

export const getFurnitures = async (req, res) => {    
    try {
        const furnitures = await Furniture.find();

        res.status(200).json(furnitures);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getFurnitureById = async (req, res) => {
    const { id: _id } = req.params;

    try {
        const furniture = await Furniture.findById(_id);

        res.json(furniture);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createFurniture = async (req, res) => {
    const furniture = req.body;

    const newFurniture = new Furniture({ ...furniture, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newFurniture.save();

        res.status(201).json(newFurniture);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateFurniture = async (req, res) => {
    const { id: _id } = req.params;
    const furniture = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No furniture with id: ${id}`);

    const updatedFurniture = await Furniture.findByIdAndUpdate(_id, {...furniture, _id}, { new: true });

    res.json(updatedFurniture);
}

export const deleteFurniture = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No furniture with id: ${id}`);

    await Furniture.findByIdAndRemove(id);

    res.json({ message: 'Furniture deleted successfully.', _id: req.params.taskId });
}