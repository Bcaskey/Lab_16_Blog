import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
    
    toBlogs(): void {
        this.navigator.navigate('blog-vc', {
            parameters: {
                username: this.context.username
            }
        });
        
    }
}
register.viewControl('home-vc', HomeViewControl);
