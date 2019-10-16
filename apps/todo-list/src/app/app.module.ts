import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  en_US,
  NgZorroAntdModule,
  NZ_I18N,
  NzButtonModule,
  NzCheckboxModule, NzIconModule,
  NzInputModule,
  NzLayoutModule
} from 'ng-zorro-antd';
/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

registerLocaleData(en);
const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '**',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NzIconModule,
    NzLayoutModule,
    NzCheckboxModule,
    NzInputModule,
    NzButtonModule,
    BrowserAnimationsModule,
    NgZorroAntdModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
