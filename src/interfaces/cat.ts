export interface CatInterface {
	_id: String;
	url: String;
	categories: CategoriesInterface;
	width: Number;
	height: Number;
}

export interface CategoriesInterface {
	name: String;
	id: Number;
}

export interface ApiCatInterface {
	id: String;
	url: String;
	categories?: Array<CategoriesInterface>;
	width: Number;
	height: Number;
	breeds?: Array<Object>;
}
