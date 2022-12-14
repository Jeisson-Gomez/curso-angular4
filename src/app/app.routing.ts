import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componente
import { CochesComponent } from './coches/coches.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { plantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Coches', component: CochesComponent },
    { path: 'Contacto', component: ContactoComponent },
    { path: 'Contacto/:page', component: ContactoComponent },
    { path: 'Empleado', component: EmpleadoComponent },
    { path: 'Fruta', component: FrutaComponent },
    { path: 'Pagina-Principal', component: HomeComponent },
    { path: 'Plantillas', component: plantillasComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
