import { Router } from 'express';

import search from './search';
import locality from './locality';

export default ({ database }) => {
	const api = Router();

	api.use('/search', search({ database }));
	api.use('/locality', locality({ database }));

	return api;
};
