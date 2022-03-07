import axios from 'axios';
import{
    requestInterceptor,
    responseSuccessInterceptor,
    responseErrorInterceptor
} from './interceptors'

function Factory(baseURL){
	//setting base url
    const instance=axios.create({
        baseURL,
    });
	//tells to every request be intercepted
	//and every response use a interceptor with a sucess and error answares
    instance.interceptors.request.use(requestInterceptor);
    instance.interceptors.response.use(
        responseSuccessInterceptor,
        responseErrorInterceptor,
    );
    return instance
}

export default Factory;
