//return our setting
const requestInterceptor = config => config;
//acess response.data in every response
const responseSuccessInterceptor = response => response.data;
//the same thing but about errors
const responseErrorInterceptor = (error) => {
	//if there is an error, it will reject
	const response = error.response || error;
	//and we return as rejected
	return Promise.reject(response);
};

export {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
};
