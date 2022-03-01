import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';
import { EditStoryComponent } from './components/edit-story/edit-story.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayingComponent } from './components/playing/playing.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { StoryListComponent } from './components/story-list/story-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'storylist', component: StoryListComponent },
  { path: 'create', component: CreateStoryComponent },
  { path: 'edit', component: EditStoryComponent },
  { path: 'playing', component: PlayingComponent },
  { path: 'details/:id', component: StoryDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateStoryComponent,
    EditStoryComponent,
    HomepageComponent,
    NavbarComponent,
    PlayingComponent,
    StoryDetailsComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
