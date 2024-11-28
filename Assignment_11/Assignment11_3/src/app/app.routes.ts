import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { WrongComponent } from './wrong/wrong.component';

export const routes: Routes = [

    {
        path : '',
        component : Child1Component
    },

    {
        path : 'technologies',
        component : Child1Component
    },

    {
        path : 'books',
        component : Child2Component
    },

    {
        path : "**",
        component : WrongComponent
    }
];
