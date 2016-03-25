import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {

getAllPosts(): async.IAjaxThenable<Array<models.IBlog>> {
    return this.http.json<Array<models.IBlog>>(
        {
        method: 'GET',
        url: this.host + '/posts'
    }).then((success) => {
        return success.response;
    }, (err) => {
        console.log(err);
    });
}
    
    getSinglePost(id: string): async.IAjaxThenable<Array<models.IBlog>> {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts/' + id
        }).then((success) => {
            return success.response;
        });
    }
    
    NewPost(myPost:models.IBlog): async.IAjaxThenable<string> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts',
            data: myPost
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);//throw lets us know that a console log was not successfull, like resending error
            throw err; //Without throw it just continues running, as if successful, after console.log
        }); // throw confirms to the rest of the chain, an error happened.
    }
}

register.injectable('blog-svc', BlogService);
