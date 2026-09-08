import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        loadChildren: () =>
            import('./features/home/home.routes')
                .then(m => m.homeRoutes)
    },

    {
        path: 'aboutus',
        loadChildren: () =>
            import('./features/aboutus/aboutus.routes')
                .then(m => m.aboutusRoutes)
    },

    {
        path: 'login',
        loadComponent: () =>
            import('./features/login/login')
                .then(m => m.Login)
    }

];