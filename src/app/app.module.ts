import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component'
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http'//httpcliendmodule

//创建路由词典，为每一个路由组件分配路由地址
let routes = [
  // {path:"",component:IndexComponent},
  {path:"",redirectTo:'index',pathMatch:'full'}, //重新定向为Index
  {path:"index",component:IndexComponent},
  {path:"productlist",component:ProductListComponent},
  {path:"productdetail",component:ProductDetailComponent},
  {path:"cart",component:CartComponent},
  {path:"userlogin",component:UserLoginComponent},
  {path:"**",component:NotFoundComponent},//此地址只能放在整个路由词典最后
]

@NgModule({
  declarations: [ //声明 组件和管道
    AppComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    UserLoginComponent,
    NotFoundComponent
  ],
  entryComponents: [],
  imports: [  //导入 模块
    BrowserModule, 
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),   //导入路由模块，在根组件(forRoot)中注册路由词典routes
    HttpClientModule, //该模块提供了httpclient服务-----导入17行 @angular/common/http
  ],
  providers: [ //提供 服务
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
