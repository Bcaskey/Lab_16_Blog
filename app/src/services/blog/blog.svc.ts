import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {

    getAllPosts(): async.IThenable<Array<models.IBlog>> {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts'
        }).then((success) => {
            return success.response;
        });
    }
    
    getSinglePost(params: id): async.IThenable<Array<models.IBlog>> {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts/' + params
        }).then((success) => {
            return success.response;
        });
    }
   
}

register.injectable('blog-svc', BlogService);
