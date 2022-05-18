import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
{
  path:'',
  component:HeaderComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'AboutUs',
  component:AboutUsComponent
},
{
  path:'portfolio',
  component:PortfolioComponent
},
{
  path:'blog',
  component:BlogComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'signup',
  component:SignupComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
