import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayersAndRoundsComponent } from './players-and-rounds/players-and-rounds.component';
import { GameviewComponent } from './gameview/gameview.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';

const routes: Routes = [
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'players-and-rounds', component: PlayersAndRoundsComponent },
  { path: 'gameview', component: GameviewComponent },
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'tutorial', component: TutorialPageComponent},
  { path: '', redirectTo: '/home-screen', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
