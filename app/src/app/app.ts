import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import BlogViewControl from '../viewcontrols/blog/blog.vc';
// import NewBlogViewControl from '../viewcontrols/newblog/newblog.vc';
import SingBlogViewControl from '../viewcontrols/Singblog/Singblog.vc';


export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'blog/:username', view: BlogViewControl },
            // { pattern: 'newblog/', view: NewBlogViewControl }
            { pattern: 'singblog/:id', view: SingBlogViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);