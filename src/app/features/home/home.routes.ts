import { Routes } from '@angular/router';

export const homeRoutes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./home')
                .then(m => m.Home),

        children: [

            {
                path: '',
                redirectTo: 'hall1',
                pathMatch: 'full'
            },

            {
                path: 'hall1',
                loadChildren: () =>
                    import('./hall1/hall1.routes')
                        .then(m => m.hall1Routes)
            },

            {
                path: 'hall2',
                loadComponent: () =>
                    import('./hall2/hall2')
                        .then(m => m.Hall2)
            }

        ]
    }

];