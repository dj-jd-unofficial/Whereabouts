import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component'
import { FooterComponent } from './footer/footer.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayersAndRoundsComponent } from './players-and-rounds/players-and-rounds.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { GameviewComponent } from './gameview/gameview.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    HomeScreenComponent,
    PageNotFoundComponent,
    PlayersAndRoundsComponent,
    PlayerCardComponent,
    GameviewComponent,
    LeaderboardComponent,
    TutorialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
