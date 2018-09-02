import { Component } from '@angular/core';
import { IModule } from '../interfaces/IModule';
import { IModuleRow } from '../interfaces/IModuleRow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  modules = [
    {
      module1: {
        name: 'test1'
      } as IModule,
      module2: {
        name: 'test2'
      } as IModule
    },
    {
      module1: {
        name: 'test3'
      } as IModule,
      module2: {
        name: 'test4'
      } as IModule
    }
  ] as IModuleRow[];
}
