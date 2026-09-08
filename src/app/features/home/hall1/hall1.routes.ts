import { Routes } from '@angular/router';

export const hall1Routes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./hall1')
                .then(m => m.Hall1),

        children: [

            {
                path: '',
                redirectTo: 'movie1',
                pathMatch: 'full'
            },

            {
                path: 'movie1',
                loadComponent: () =>
                    import('./movie1/movie1')
                        .then(m => m.Movie1)
            },

            {
                path: 'movie2',
                loadComponent: () =>
                    import('./movie2/movie2')
                        .then(m => m.Movie2)
            }

        ]
    }

];