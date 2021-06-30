import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HistoryComponent } from './history/history.component';
import {SettingsComponent} from './settings/settings.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',component:ExploreComponent},
  {path:'explore' ,component:ExploreComponent},
  {path:'history' ,component:HistoryComponent},
  {path:'settings' ,component:SettingsComponent},
  {path:'search' ,component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
