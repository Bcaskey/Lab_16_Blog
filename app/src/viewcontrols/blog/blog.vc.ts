import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../Repositories/blog/blog.repo';
import SingViewControl from '../singblog/singblog.vc';
import NewViewControl from '../newblog/newblog.vc';


export default class BlogViewControl extends BaseViewControl {
    templateString: string = require('./blog.vc.html');

    context = {
        blogs: <Array<models.IBlog>>[],
        username: '',
        singleView: SingViewControl
    };
    
    constructor(private blogRepo: BlogRepository) {
        super();
    }
    
    navigatedTo(parameters: any, query: any){
        this.context.username = parameters.username;
        
        this.blogRepo.getAllPosts().then(
            (success) => {
                this.context.blogs = success;
                console.log(success);
            }, (err) => {
                console.log(err);
            }
        );
    }
    
    SingleBlog(id: string): void {
        this.navigator.navigate('singblog-vc', {
            parameters: {
                id: id
            }
        });
    }
    
    NewBlog(): void {
        this.navigator.navigate('newblog-vc', {
        });
    }
}

register.viewControl('blog-vc', BlogViewControl, [BlogRepository]);
