import { Router } from 'express';

import search from './search';

export default ({ database }) => {
	const api = Router();

	api.use('/search', search({ database }));

	return api;
};
