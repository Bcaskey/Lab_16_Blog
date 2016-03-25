import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../repositories/blog/blog.repo';
import BlogViewControl from '../blog/blog.vc';

export default class NewBlogViewControl extends BaseViewControl {
    templateString: string = require('./newblog.vc.html');

    context = {
        title: '',
        author: '',
        content: ''
    }
    
    constructor(private blogRepo: BlogRepository) {
        super();
    }
    
    makePost(): void {
        let myPost: models.IBlog = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content
        };
        this.blogRepo.NewPost(myPost).then((success) => {
            console.log(success);
            this.navigator.navigate(BlogViewControl);
        }, (err) => {
            console.log(err);
        });
    }
}
register.viewControl('newblog-vc', NewBlogViewControl, [BlogRepository]);
