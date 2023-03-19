import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActordetailsComponent } from './actordetails/actordetails.component';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { SignupComponent } from './signup/signup.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tvshow',component:TvshowComponent},
  {path:'people',component:PeopleComponent},
  {path:'details/:mediaType/:id',component:DetailsComponent},
  {path:'actor/person/:id',component:ActordetailsComponent},
  {path:'network',component:NetworkComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
