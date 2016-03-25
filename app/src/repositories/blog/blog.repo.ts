import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogService from '../../services/blog/blog.svc';

export default class BlogRepository extends BaseRepository {
    
    constructor(private blogService: BlogService) {//variable calling the injectable below[]
        super();//this is the dependance injection. Must call super. 
    }

    getAllPosts(): async.IThenable<Array<models.IBlog>> {
        return this.blogService.getAllPosts();
    }
    
    getSinglePost(id: string): async.IThenable<Array<models.IBlog>> {
        return this.blogService.getSinglePost(id);
    }

    NewPost(myPost:models.IBlog): async.IThenable<string> {
        return this.blogService.NewPost(myPost);
    }
}

register.injectable('blog-repo', BlogRepository, [BlogService]);
