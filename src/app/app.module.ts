import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { AndersContainerComponent } from './anders-container/anders-container.component';
import { LabelContainerComponent } from './anders-container/label-container/label-container.component';
import { TreeComponent } from './anders-container/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    AndersContainerComponent,
    LabelContainerComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    CardModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
