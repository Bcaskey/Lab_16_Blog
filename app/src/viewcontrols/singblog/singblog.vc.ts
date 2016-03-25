import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../repositories/blog/blog.repo';

export default class SingBlogViewControl extends BaseViewControl {
    templateString: string = require('./singblog.vc.html');

    context: any = {
        blogs: [],
    };
    
    
    constructor(private blogRepo: BlogRepository) {
        super();
    }
     
    // navigatedTo(parameters: any, query: any){
    //     let id = parameters.id;
        
    //     this.blogRepo.getSinglePost(id).then(
    //         (success) => {
    //             this.context.blogs = success;
    //             // console.log(success);
    //         }, (err) => {
    //             console.log(err);
    //         }
    //     );
    // }
}



register.viewControl('singblog-vc', SingBlogViewControl, [BlogRepository]);
