import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioComponent } from './radio/radio.component';
import { ExploreComponent } from './explore/explore.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';

import { YouTubePlayerModule } from "@angular/youtube-player";
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ReadMeComponent } from './read-me/read-me.component';


@NgModule({
  declarations: [
    AppComponent,
    RadioComponent,
    ExploreComponent,
    HistoryComponent,
    SettingsComponent,
    SearchComponent,
    ReadMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
