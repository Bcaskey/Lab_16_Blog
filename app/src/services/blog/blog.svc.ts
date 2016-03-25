import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {

    getAllPosts(): async.IThenable<Array<models.IBlog>> {
        return this.http.json<Array<models.IBlog>>({
            method: 'GET',
            url: this.host + '/posts'
        }).then((success) => {
            return success.response;
        });
    }
    
    getSinglePost(id: string): async.IThenable<Array<models.IBlog>> {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts/' + id
        }).then((success) => {
            return success.response;
        });
    }
    
    NewPost(): async.IThenable<Array<models.IBlog>> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts'
        }).then((success) => {
            return success.response;
        });
    }
}

register.injectable('blog-svc', BlogService);
