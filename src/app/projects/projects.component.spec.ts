import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { TableModule } from 'primeng/table';
import { AndersContainerComponent } from '../anders-container/anders-container.component';
import { SeperatorComponent } from '../seperator/seperator.component';
import { GalleriaModule, CardModule, LightboxModule, TooltipModule } from 'primeng/primeng';
import { TreeComponent } from '../anders-container/tree/tree.component';
import { DungeonBoxesComponent } from '../anders-container/dungeon-boxes/dungeon-boxes.component';
import { LabelContainerComponent } from '../anders-container/label-container/label-container.component';
import { PerlinComponent } from '../anders-container/perlin/perlin.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        AndersContainerComponent,
        SeperatorComponent,
        TreeComponent,
        DungeonBoxesComponent,
        LabelContainerComponent,
        PerlinComponent
      ],
      imports: [
        TableModule,
        GalleriaModule,
        CardModule,
        LightboxModule,
        TooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
