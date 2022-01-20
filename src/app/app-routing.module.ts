import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
      path:'description',
      loadChildren: () => import('./pages/description/description.module').then(m => m.DescriptionModule)
    },
    {
      path:'currency',
      loadChildren: () => import('./pages/currency/currency.module').then(m => m.CurrencyModule)
    },
    {
      path:'news',
      loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
    },
    {
      path:'weather',
      loadChildren: () => import('./pages/weather/weather.module').then(m => m.WeatherModule)
    },
    {
      path: '**',
      redirectTo:'description'
    }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
