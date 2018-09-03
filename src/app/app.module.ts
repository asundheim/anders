import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { AndersContainerComponent } from './anders-container/anders-container.component';
import { LabelContainerComponent } from './anders-container/label-container/label-container.component';
import { TreeComponent } from './anders-container/tree/tree.component';
import { DungeonBoxesComponent } from './anders-container/dungeon-boxes/dungeon-boxes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AndersContainerComponent,
    LabelContainerComponent,
    TreeComponent,
    DungeonBoxesComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    CardModule,
    GalleriaModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
