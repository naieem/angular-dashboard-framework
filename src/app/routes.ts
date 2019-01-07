const SiteRoute = [
    {
        path: 'about',
        loadChildren: './business/about/about.module#AboutModule',
        data:{
            MenuShow:true,
            MenuTitle:'About',
        }
    }, {
        path: 'contact',
        loadChildren: './business/contact/contact.module#ContactModule',
        data:{
            MenuShow:true,
            MenuTitle:'Contact',
        }
    }, {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    }, {
        path: '**',
        loadChildren: './packages/page-not-found/page-not-found.module#PageNotFoundModule'
    }
];
export {SiteRoute};