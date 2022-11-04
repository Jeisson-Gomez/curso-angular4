import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

//Lo Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './coches/coches.component';
import { ContactoComponent } from './contacto/contacto.component'
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { plantillasComponent } from './plantillas/plantillas.component';

//Los Pipes
import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    ContactoComponent,
    ConversorPipe,
    EmpleadoComponent,
    FrutaComponent,
    HomeComponent,
    plantillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
