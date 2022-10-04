import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageOneComponent } from './components/pages/home-page-one/home-page-one.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { ProductionAudiovisuelleComponent } from './components/pages/production-audiovisuelle/production-audiovisuelle.component';
import { RELATIONSPRESSEETPUBLIQUESComponent } from './components/pages/relations-presse-et-publiques/relations-presse-et-publiques.component';
import { ÉVÉNEMENTIELComponent } from './components/pages/événementiel/événementiel.component';
import { MarketingDigitalComponent } from './components/pages/marketing-digital/marketing-digital.component';
import { DéveloppementWebComponent} from './components/pages/développement-web/développement-web.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { DESIGNGRAPHIQUEComponent } from './components/pages/design-graphique/design-graphique.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NOSCLIENTSComponent } from './components/pages/nos-clients/nos-clients.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';

const routes: Routes = [
    {path: '',  component: LoginPageComponent},
    {path: 'home', component: HomePageOneComponent},
    {path: 'about-style-1', component: AboutPageOneComponent},
   
    {path: 'production-audiovisuelle', component: ProductionAudiovisuelleComponent},
    {path: 'relations-presse-et-publiques', component: RELATIONSPRESSEETPUBLIQUESComponent},
    
   
    {path: 'marketing-digital', component: MarketingDigitalComponent},
    {path: 'événementiel', component: ÉVÉNEMENTIELComponent},
  
    {path: 'développement-web', component: DéveloppementWebComponent},
    {path: 'feedback', component: FeedbackPageComponent},
    {path: 'design-graphique', component: DESIGNGRAPHIQUEComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'error-404', component: ErrorPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'nos-clients', component: NOSCLIENTSComponent},
 
    
   
   
   
 
    {path: 'single-courses', component: CoursesDetailsPageComponent},
   
  
    
    
    {path: 'edit-account', component: EditAccountPageComponent},
    {path: 'blog-style-2', component: BlogRightSidebarPageComponent},
    {path: 'single-blog', component: BlogDetailsPageComponent},
    
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }