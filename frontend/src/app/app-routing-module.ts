import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ShopComponent } from './main/shop/shop.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './main/shop/product-details/product-details.component';
import { CartComponent } from './main/cart/cart.component';
import { CartResolver } from './services/resolvers/cart-resolver';

// resolve: {cartItems: CartResolver}

const routes: Routes = [
    { path: "", component: MainComponent, resolve: {cartItems: CartResolver}},
    { path: 'home', component: MainComponent, resolve: {cartItems: CartResolver}  },
    { path : 'login', component: LoginComponent}, 
    { path: "register", component: RegisterComponent},
    { path: "forgot-password", component: ForgotPasswordComponent},
    { path: "shop", component: ShopComponent},
    { path: "shop/product/:id", component: ProductDetailsComponent},
    { path: "cart", component: CartComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }