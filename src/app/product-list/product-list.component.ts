import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  //导入router
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList=[]

  constructor(private router:Router,private nav:NavController,private http:HttpClient,private url:UrlService) { } //导入路由器，可以找到路由词典

  ngOnInit() {
    this.http.get(this.url.productListApi).subscribe((res:any)=>{
      this.productList=res.data
      console.log(this.productList)
    })
  }
  jumpToLogin(){
    //Angular中的路由跳转：脚本跳转
    //router对象不具备历史跳转功能
    this.router.navigateByUrl('/userlogin')  //斜杠可加可不加
  }
  goBack(){
    this.nav.back()
  }
}
