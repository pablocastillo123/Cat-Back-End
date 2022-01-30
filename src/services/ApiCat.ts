import axios from 'axios';

const API_KEY = 'f6fb1744-bfb2-4515-b798-0731e85a246e';
const BASE_URL_API = 'https://api.thecatapi.com/v1/';

const headersList = {
	"Accept": "*/*",
	"x-api-key": API_KEY,
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST",
	"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
	"Access-Control-Allow-Credentials": "true" 
}

const axiosRequest = axios.create({
	baseURL: BASE_URL_API,
	headers: headersList
});

const getCat = async () => {
	const url = '/images/search';
	return await axiosRequest.get(url, {
		params: {
			size: 'full',
			order: 'random',
			limit: 100,
			format: 'json',
			bread_id: true
		}
	});
};

const getCategories = async () => {
	const url = '/categories';
	return await axiosRequest.get(url);
};

export { getCat, getCategories };
