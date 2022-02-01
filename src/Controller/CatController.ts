import { getCat, getCategories } from './../services/ApiCat';
import CatModel from './../models/cat';
import { Request, Response } from 'express';
import { ApiCatInterface, CatInterface } from './../interfaces/cat';

const filterCatBreedsAndCategory = (list: Array<ApiCatInterface>) => {
	let newList: Array<CatInterface> = [];
	list.forEach((e: any) => {
		if (e.breeds?.length === 0 && e.categories) {
			newList.push({
				_id: e.id,
				categories: e.categories[0],
				url: e.url,
				width: e.width,
				height: e.height
			});
		}
	});
	return newList;
};

const StoreCatFromApi = async () => {
	await getCat()
		.then((res) => {
			const data = res.data;
			if (data) {
				// Filtrado de datos procedentes de la api
				let newData = filterCatBreedsAndCategory(data);

				// Almacenamiento de datos sin duplicidad
				newData.forEach((e) => {
					CatModel.findById(e._id).then((res) => {
						if (!res) {
							let doc = new CatModel(e);
							doc.save();
						}
					});
				});
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
		let result = await Promise.all([getCategories(), CatModel.find()]);

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
