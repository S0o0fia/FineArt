import { FacultyhistoryComponent } from './components/about/info/facultyhistory/facultyhistory.component';
import { FacultyvisionComponent } from './components/about/info/facultyvision/facultyvision.component';
import { FacultymessageComponent } from './components/about/info/facultymessage/facultymessage.component';
import { FacultygoalsComponent } from './components/about/info/facultygoals/facultygoals.component';
import { FacultyPresidentComponent } from './components/about/info/faculty-president/faculty-president.component';
import { ConnectComponent } from './components/about/connect/connect.component';
import { SiteMapComponent } from './components/about/site-map/site-map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/site-map', component: SiteMapComponent },
  { path: 'about/connect', component: ConnectComponent },
  { path: 'about/info/faculty-goals', component:  FacultygoalsComponent},
  {
    path: 'about/info/faculty-message',
    component: FacultymessageComponent ,
  },
  {
    path: 'about/info/faculty-president',
    component: FacultyPresidentComponent,
  },

  {
    path: 'about/info/faculty-vision',
    component: FacultyvisionComponent ,
  },
  {
    path: 'about/info/faculty-history',
    component: FacultyhistoryComponent ,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
