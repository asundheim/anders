import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AndersContainerComponent } from './anders-container/anders-container.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/primeng';
import { LabelContainerComponent } from './anders-container/label-container/label-container.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AndersContainerComponent,
        LabelContainerComponent
      ],
      imports: [
        TableModule,
        CardModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
