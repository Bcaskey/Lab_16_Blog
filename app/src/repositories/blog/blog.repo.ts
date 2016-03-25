import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogService from '../../services/blog/blog.svc';

export default class BlogRepository extends BaseRepository {
    
    constructor(private blogService: BlogService) {
        super();
    }

    getAllPosts(): async.IThenable<Array<any>> {
        return this.blogService.getAllPosts();
    }
    
    // getSinglePost(id: string): async.IThenable<Array<any>> {
    //     return this.blogService.getSinglePost(id);
    // }

}

register.injectable('blog-repo', BlogRepository, [BlogService]);
