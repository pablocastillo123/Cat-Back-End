import mongoose from 'mongoose';

const CatModel = new mongoose.Schema({
	_id: { required: true, type: String },
	url: { required: false, type: String },
	categories: {
		name: { required: false, type: String },
		id: { required: false, type: Number }
	},
	width: { required: false, type: Number },
	height: { required: false, type: Number }
});

export default mongoose.model('CatModel', CatModel);
