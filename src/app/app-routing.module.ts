import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'routeOne', loadChildren: () => import('./route-one/route-one.module').then(m => m.RouteOneModule) }, 
  { path: 'routeTwo', loadChildren: () => import('./route-two/route-two.module').then(m => m.RouteTwoModule) },
  { path: 'routeThree', loadChildren: () => import('./route-three/route-three.module').then(m => m.RouteThreeModule) },
  { path: 'routeFour', loadChildren: () => import('./route-four/route-four.module').then(m => m.RouteFourModule) },
  { path: 'routeFive', loadChildren: () => import('./route-five/route-five.module').then(m => m.RouteFiveModule) },
  { path: 'routeSix', loadChildren: () => import('./route-six/route-six.module').then(m => m.RouteSixModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
