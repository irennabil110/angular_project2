import { Routes } from '@angular/router';

export const aboutusRoutes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./aboutus')
                .then(m => m.Aboutus),

        children: [

            {
                path: '',
                redirectTo: 'contactus',
                pathMatch: 'full'
            },

            {
                path: 'contactus',
                loadComponent: () =>
                    import('./contactus/contactus')
                        .then(m => m.Contactus)
            },

            {
                path: 'locations',
                loadComponent: () =>
                    import('./locations/locations')
                        .then(m => m.Locations)
            }

        ]
    }

];