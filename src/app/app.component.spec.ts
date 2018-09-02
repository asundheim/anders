import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AndersContainer } from './anders-container/anders-container.component';
import { LabelContainer } from './label-container/label-container.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/primeng';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AndersContainer,
        LabelContainer
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
