import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CurrencyDetailComponent } from './pages/currency-detail/currency-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "currency-detail", component: CurrencyDetailComponent
  },
  {
    path: "currency-detail/:id", component: CurrencyDetailComponent
  },
  {
    path: "**", component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
