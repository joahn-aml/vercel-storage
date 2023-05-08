import jwt from 'jsonwebtoken';
import { JWT_KEY } from '$env/static/private';

/** @type {(request: Request) => boolean} */
export const valid = (request) => {
	const authorization = request.headers.get('Authorization');

	if (!authorization) {
		return false;
	}

	const [bearer, token] = authorization.split(' ');

	if (!bearer || !token) {
		return false;
	}

	if (bearer !== 'Bearer') {
		return false;
	}

	try {
		jwt.verify(token ?? '', JWT_KEY);
	} catch {
		return false;
	}

	return true;
};
