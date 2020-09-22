import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { VideoComponent } from './pages/video/video.component';
import { ProfilComponent } from './pages/profil/profil.component';
import {CheckgGuard} from '../app/services/checkg.guard';

const routes: Routes = [

  {
    path:'history', component: HistoryComponent,  canActivate: [CheckgGuard]
  },

  {
    path:'video', component: VideoComponent, canActivate: [CheckgGuard]
  },

  {
    path: 'profil', component:ProfilComponent,  canActivate: [CheckgGuard]
  },


  {
   path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },


  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [CheckgGuard]},

  {
    path:"**", redirectTo:('/login'), pathMatch:'full'
    },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
