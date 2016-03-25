import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import BlogRepository from '../../Repositories/blog/blog.repo';//setp 1
import SingViewControl from '../singblog/singblog.vc';
import NewViewControl from '../newblog/newblog.vc';

//VIEW CONTROL START
export default class BlogViewControl extends BaseViewControl {
    templateString: string = require('./blog.vc.html');

    context = {
        blogs: <Array<models.IBlog>>[],
        username: '',
        singleView: SingViewControl
    };
    
    constructor(private blogRepo: BlogRepository) {// step 3, BlogRepo is not avail to call NavTo
        super();
    }
    
    navigatedTo(parameters: any, query: any) {
        this.context.username = parameters.username;
        this.blogRepo.getAllPosts().then(// because it is a thenable
            (success) => {
                this.context.blogs = success;
                console.log(success);
            }, (err) => {
                console.log(err);
            });
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

//VIEW CONTROL STOP
register.viewControl('blog-vc', BlogViewControl, [BlogRepository]);// setp 2
