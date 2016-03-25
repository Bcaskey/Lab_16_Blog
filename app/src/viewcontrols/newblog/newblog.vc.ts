import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class NewBlogViewControl extends BaseViewControl {
    templateString: string = require('./newblog.vc.html');

    context: any = {};
}

register.viewControl('newblog-vc', NewBlogViewControl);
