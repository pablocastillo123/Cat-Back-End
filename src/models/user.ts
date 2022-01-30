import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
	googleId: { required: false, type: String },
	username: { required: true, type: String }
});

export default mongoose.model('UserModel', UserModel);
