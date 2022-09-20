import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'department/:id', component: HelloComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    ),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CategoryComponent,
    DepartmentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
