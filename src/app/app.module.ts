import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule, ToggleButtonModule, LightboxModule, ButtonModule, MessageService, TooltipModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/galleria';
import { ToastModule } from 'primeng/toast';
import {
  AppComponent,
  AndersContainerComponent,
  TreeComponent,
  DungeonBoxesComponent,
  SeperatorComponent,
  AboutComponent,
  ProjectsComponent,
  ConstellationsComponent,
  PerlinComponent,
  SpotifyComponent,
  TreeeComponent,
  LabelContainerComponent,
  DoormantandcComponent
} from './index';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BathroomQueueComponent } from './bathroom-queue/bathroom-queue.component';
import { BlogComponent } from './blog/blog.component';
import { MapsPostComponent } from './blog/posts/maps-post/maps-post.component';
import { MathModule } from './blog/services/math/math.module';
import { Flutter1Component } from './blog/posts/flutterapp-post/flutter-1/flutter-1.component';
import { AuthSchemaPostComponent } from './blog/posts/auth-schema-post/auth-schema-post.component';
import { KeyvaultAccessPostComponent } from './blog/posts/keyvault-access-post/keyvault-access-post.component';
import { ScriptHackComponent } from './scripthack/scripthack.component';
import { HighlightService } from './blog/services/highlight.service';
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
  },
  {
    path: 'spotify',
    component: SpotifyComponent
  },
  {
    path: 'ami',
    component: TreeeComponent
  },
  {
    path: 'doorman/privacy',
    component: DoormantandcComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/maps',
    component: MapsPostComponent
  },
  {
    path: 'blog/flutterapp1',
    component: Flutter1Component
  },
  {
    path: 'blog/authschema',
    component: AuthSchemaPostComponent
  },
  {
    path: 'blog/keyvaultaccess',
    component: KeyvaultAccessPostComponent
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
      PerlinComponent,
      SpotifyComponent,
      TreeeComponent,
      DoormantandcComponent,
      BathroomQueueComponent,
      BlogComponent,
      MapsPostComponent,
      Flutter1Component,
      AuthSchemaPostComponent,
      KeyvaultAccessPostComponent,
      ScriptHackComponent
   ],
   imports: [
      BrowserModule,
      TableModule,
      CardModule,
      GalleriaModule,
      RouterModule.forRoot(appRoutes),
      ToggleButtonModule,
      LightboxModule,
      HttpClientModule,
      ButtonModule,
      ToastModule,
      BrowserAnimationsModule,
      TooltipModule,
      MathModule.forRoot()
   ],
   providers: [
      MessageService,
      HighlightService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
