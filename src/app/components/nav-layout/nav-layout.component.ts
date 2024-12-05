import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-layout',
    imports: [],
    templateUrl: './nav-layout.component.html',
    styleUrl: './nav-layout.component.scss'
})
export class NavLayoutComponent {

    constructor(
        private _route: Router,
    ) { }

    public navigateTo(path: string) {
        this._route.navigate([path]);
    }
}
