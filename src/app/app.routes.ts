import { Routes } from '@angular/router';
import { CalorieTrackerComponent } from './components/calorie-tracker/calorie-tracker.component';
import { AssistantComponent } from './components/assistant/assistant.component';

export const routes: Routes = [
    { path: 'calories', component: CalorieTrackerComponent },
    { path: 'assistant', component: AssistantComponent },
    { path: '', redirectTo: '/calories', pathMatch: 'full' },
];
