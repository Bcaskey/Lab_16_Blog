import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../repositories/blog/blog.repo';


export default class NewBlogViewControl extends BaseViewControl {
    templateString: string = require('./newblog.vc.html');

    context = { //Is context a variable, or do I need one?
        title: '',
        author: '',
        content: ''
    }
    
    constructor(private blogRepo: BlogRepository) {
        super();
    }
    
    makePost(): void {
        let myPost = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content}
        this.blogRepo.NewPost(myPost);
    }
}
register.viewControl('newblog-vc', NewBlogViewControl, [BlogRepository]);
