import { getCat } from './../services/ApiCat';
import CatModel from './../models/cat';
import { Request, Response } from 'express';

const filterCatBreeds = (data: any) => {
	return data.filter((e: any) => {
		return e.breeds.length == 0 && e.categories;
	});
};

const StoreCatFromApi = async () => {
	await getCat().then((res) => {
		const data = res.data;
		if (data) {
			let newData = filterCatBreeds(data);
			console.log('StoreCatFromApi', newData);

			CatModel.insertMany(newData);
		}
	});
};

const getCatFromMongoDb = async (req: Request, res: Response) => {
	await CatModel.find()
		.then((data) => {
			res.send({data});
		})
		.catch((err) => {
			res.send({ message: 'Error al obtener datos, intente mas tarde...' });
		});
};

export { StoreCatFromApi, getCatFromMongoDb };
