import { Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'  //由root提供
})
export class UrlService{
    //服务器基地址
    server = 'http://www.codeboy.com/' 
    //首页商品
    indexApi = this.server+'data/product/index.php'  
    //商品列表API地址
    productListApi=this.server+'data/product/list.php?pno=0'
    //商品详情API地址
    productDetailApi=this.server+'data/product/details.php?lid='
    //用户注册API地址
    userRegisterApi= this.server +'data/user/register.php'
    //用户登录API地址
    userLoginApi = this.server+'data/user/login.php'
}


