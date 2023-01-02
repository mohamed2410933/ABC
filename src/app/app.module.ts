import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularEditorModule } from '@kolkov/angular-editor';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { FillterPipe } from './shared/pipes/fillter.pipe';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module';
import { PointerComponent } from './views/pointer/pointer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PointerComponent,
    // FillterPipe
  ],
  imports: [
   
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000, // 15 seconds
      closeButton: false,
      progressBar: true,
      positionClass:'toast-top-right'
    }),
    NgxSpinnerModule,
    // FontAwesomeModule
    AngularEditorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SharedPipesModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
