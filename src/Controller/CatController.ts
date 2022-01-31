import { getCat, getCategories } from './../services/ApiCat';
import CatModel from './../models/cat';
import { Request, Response } from 'express';

const filterCatBreeds = (data: any) => {
	return data.filter((e: any) => {
		return e.breeds.length == 0 && e.categories;
	});
};

const StoreCatFromApi = async () => {
	await getCat()
		.then((res) => {
			const data = res.data;
			if (data) {
				let newData = filterCatBreeds(data);
				CatModel.insertMany(newData, { ordered: false });
			}
		})
		.catch((error) => {
			console.log(error.message);
		});
};

const getCatFromMongoDb = async (req: Request, res: Response) => {
	try {
		let result = await CatModel.find();
		res.send({ data: result });
	} catch (error) {
		res.status(500).send({
			message: 'Error al obtener datos, intente mas tarde...'
		});
	}
};

const getCatByCategory = async (req: Request, res: Response) => {
	try {
		let result = await Promise.all([
			getCategories(),
			CatModel.aggregate([
				{
					$project: {
						category: {
							$arrayElemAt: ['$categories', 0]
						},
						url: 1,
						width: 1,
						height: 1,
						id: 1,
						_id: 1
					}
				}
			])
		]);

		let data = {
			category: result[0].data,
			cats: result[1]
		};

		res.send(data);
	} catch (error) {
		res.status(500).send({
			message: 'Error al obtener datos, intente mas tarde...'
		});
	}
};

export { StoreCatFromApi, getCatFromMongoDb, getCatByCategory };
