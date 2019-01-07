const SiteRoute = [
    {
        path: 'about',
        loadChildren: './business/about/about.module#AboutModule',
        data: {
            MenuShow: true,
            MenuTitle: 'About',
            Route:'/about'
        }
    }, {
        path: 'contact',
        loadChildren: './business/contact/contact.module#ContactModule',
        data: {
            MenuShow: true,
            MenuTitle: 'Contact',
            Route:'/contact'
        }
    }, {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full',
        data: {
            MenuShow: false
        }
    }, {
        path: '**',
        loadChildren: './packages/page-not-found/page-not-found.module#PageNotFoundModule',
        data: {
            MenuShow: false
        }
    }
];
export {SiteRoute};