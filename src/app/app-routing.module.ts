import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IotComponent } from './iot/iot.component';




const routes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'login', component: LoginComponent  },
    { path : 'register', component: RegisterComponent  },
    { path : 'about', component: AboutComponent  },
    { path : 'services', component: ServicesComponent  },
    { path : 'checkout', component: CheckoutComponent  },
    { path : 'iot', component: IotComponent  },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }

    
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
