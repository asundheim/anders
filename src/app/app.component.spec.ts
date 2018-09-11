import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AndersContainerComponent } from './anders-container/anders-container.component';
import { TableModule, Table } from 'primeng/table';
import { CardModule, GalleriaModule } from 'primeng/primeng';
import { LabelContainerComponent } from './anders-container/label-container/label-container.component';
import { TreeComponent } from './anders-container/tree/tree.component';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';
import { SeperatorComponent } from './seperator/seperator.component';
import { RouterModule, Routes } from '@angular/router';
import { DungeonBoxesComponent } from './anders-container/dungeon-boxes/dungeon-boxes.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { APP_BASE_HREF } from '@angular/common';
import { ConstellationsComponent } from './constellations/constellations.component';
import { PerlinComponent } from './anders-container/perlin/perlin.component';

describe('AppComponent', () => {
  beforeEach(async(() => {

  const appRoutes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: '',
      redirectTo: '/anders',
      pathMatch: 'full'
    },
    {
      path: 'anders',
      component: ProjectsComponent
    }
  ];
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AndersContainerComponent,
        LabelContainerComponent,
        TreeComponent,
        AngularFontAwesomeComponent,
        ConstellationsComponent,
        SeperatorComponent,
        DungeonBoxesComponent,
        AboutComponent,
        ProjectsComponent,
        PerlinComponent
      ],
      imports: [
        TableModule,
        CardModule,
        GalleriaModule,
        RouterModule.forRoot(appRoutes),
        TableModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
