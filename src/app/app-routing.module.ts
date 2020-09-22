import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { VideoComponent } from './pages/video/video.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [

  {
    path:'history', component: HistoryComponent
  },

  {
    path:'video', component: VideoComponent
  },

  {
    path: 'profil', component:ProfilComponent
  },


  {
   path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },


  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  {
    path:"**", redirectTo:('/login'), pathMatch:'full'
    },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
