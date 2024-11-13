import { Routes } from '@angular/router';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

export const routes: Routes = [
    { path: '', component: PortifolioComponent },
    { path: '**', redirectTo: '' }
];
