import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TvSeriesContaienrComponent } from './start-page/tv-series-contaienr/tv-series-contaienr.component';
import { TvSerierItemComponent } from './start-page/tv-series-contaienr/tv-serier-item/tv-serier-item.component';
import {MatCardModule} from '@angular/material/card';
import { DetailsOfTvSerialComponent } from './details-of-tv-serial/details-of-tv-serial.component';

const appRoutes: Routes = [
  // { path: 'serial/:id',      component: HeroDetailComponent },
  {
    path: 'serial',
    children: [{
      path: ':id',
      component: DetailsOfTvSerialComponent
    }]
  },
  { path: '',
    redirectTo: '/strona-startowa',
    pathMatch: 'full',
    data: { title: 'Strona startowa' }
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
    TvSeriesContaienrComponent,
    TvSerierItemComponent,
    DetailsOfTvSerialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

