import mongoose from 'mongoose';

const startMongoDb = () => {
	const { START_MONGODB, MONGODB_USERNAME, MONGODB_PASSWORD, END_MONGODB } = process.env;
	mongoose.connect(
		`${START_MONGODB}${MONGODB_USERNAME}:${MONGODB_PASSWORD}${END_MONGODB}`,
		() => console.log('Conexion creada con MongoDb')
	);
};

export default startMongoDb;
