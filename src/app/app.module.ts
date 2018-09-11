import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule, ToggleButtonModule, LightboxModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { AndersContainerComponent } from './anders-container/anders-container.component';
import { LabelContainerComponent } from './anders-container/label-container/label-container.component';
import { TreeComponent } from './anders-container/tree/tree.component';
import { DungeonBoxesComponent } from './anders-container/dungeon-boxes/dungeon-boxes.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConstellationsComponent } from './constellations/constellations.component';
import { PerlinComponent } from './anders-container/perlin/perlin.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AndersContainerComponent,
    LabelContainerComponent,
    TreeComponent,
    DungeonBoxesComponent,
    SeperatorComponent,
    ConstellationsComponent,
    AboutComponent,
    ProjectsComponent,
    PerlinComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    CardModule,
    GalleriaModule,
    RouterModule.forRoot(appRoutes),
    ToggleButtonModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
