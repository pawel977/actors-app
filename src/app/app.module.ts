import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TvSeriesContaienrComponent } from './start-page/tv-series-contaienr/tv-series-contaienr.component';

const appRoutes: Routes = [
  // { path: 'serial/:id',      component: HeroDetailComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/strona-startowa',
    pathMatch: 'full'
  },
  { path: 'strona-startowa',
    pathMatch: 'full',
    component: StartPageComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NotFoundComponent,
    StartPageComponent,
    TvSeriesContaienrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

