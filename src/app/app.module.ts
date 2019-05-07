import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandyListComponent } from './candy-list/candy-list.component';
import { HeaderComponent } from './header/header.component';
import { CandyFormComponent } from './candy-form/candy-form.component';

const appRoutes: Routes = [
  { path: 'add', component: CandyFormComponent },
  {
    path: 'list', component: CandyListComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    CandyListComponent,
    HeaderComponent,
    CandyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
     )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
