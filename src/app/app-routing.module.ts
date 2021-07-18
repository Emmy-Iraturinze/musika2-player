import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HistoryComponent } from './history/history.component';
import {SettingsComponent} from './settings/settings.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {ReadMeComponent} from './read-me/read-me.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'appcomponent',component:AppComponent},
  {path:'explore' ,component:ExploreComponent},
  {path:'history' ,component:HistoryComponent},
  {path:'sign-up' ,component:SettingsComponent},
  {path:'search' ,component:SearchComponent},
  {path:'read-me',component:ReadMeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
