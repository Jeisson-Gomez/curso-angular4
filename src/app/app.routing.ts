import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componente
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },
    { path: 'Empleado', component: EmpleadoComponent},
    { path: 'Fruta', component: FrutaComponent},
    { path: '**', component: EmpleadoComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);