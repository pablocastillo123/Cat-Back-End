import mongoose from 'mongoose';

const CatModel = new mongoose.Schema({
	id: { required: false, type: String },
	url: { required: false, type: String },
	categories: { required: false, type: Array },
	breeds: { required: false, type: Array },
	width: { required: false, type: Number },
	height: { required: false, type: Number }
});

export default mongoose.model('CatModel', CatModel);
