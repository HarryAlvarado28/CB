import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { ExamComponent } from './exam/exam.component';

const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { titulo: 'Dashboard' }
  },
  { path: 'progreso', component: ProgresoComponent, data: { titulo: 'Progreso' } },
  { path: 'exam', component: ExamComponent, data: { titulo: 'Examen' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
