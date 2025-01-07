import { Component } from '@angular/core';

@Component({
    selector: 'app-calorie-tracker',
    imports: [],
    templateUrl: './calorie-tracker.component.html',
    styleUrl: './calorie-tracker.component.scss'
})
export class CalorieTrackerComponent {
    public isAnimated: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        // Start the animation with a delay
        setTimeout(() => {
            this.isAnimated = true;
        }, 500); // Adjust delay as needed
    }
}
