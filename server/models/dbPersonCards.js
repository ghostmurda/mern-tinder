import mongoose from 'mongoose';

const personSchema = mongoose.Schema({
    name: String,
    img: String
});

export default mongoose.model('persons', personSchema);