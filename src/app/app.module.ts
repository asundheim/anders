import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { AndersContainer } from './anders-container/anders-container.component';
import { LabelContainer } from './label-container/label-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AndersContainer,
    LabelContainer
  ],
  imports: [
    BrowserModule,
    TableModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
