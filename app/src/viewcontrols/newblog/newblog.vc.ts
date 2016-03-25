import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../repositories/blog/blog.repo';


export default class NewBlogViewControl extends BaseViewControl {
    templateString: string = require('./newblog.vc.html');

    context: any = {};


    constructor(private blogRepo: BlogRepository) {
        super();
    }

    navigatedTo(parameters: any, query: any){
            this.blogRepo.NewPost().then(
                (success) => {
                    this.context.blogs = success;
                }, (err) => {
                    console.log(err);
                }
            );
        }

}
register.viewControl('newblog-vc', NewBlogViewControl, [BlogRepository]);
