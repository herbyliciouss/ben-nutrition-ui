import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NavLayoutComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Ben';
}
