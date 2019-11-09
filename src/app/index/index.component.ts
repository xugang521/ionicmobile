import { Component, OnInit, ViewChild } from '@angular/core';
import { UrlService } from '../url.service';  //
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {


  @ViewChild("myslides",{static:true}) //轮播动画
  mySlideList


  carouselItems=[]      //轮播广告条目
  newArrivalItems = []  //新品上市条目
  recommendedItems = [] //首页推荐条目
  topSaleItems = []     //热销单品条目
  //导入service httpclient与urlservice(自己写的服务)
  constructor(private url:UrlService,private http:HttpClient) { }
  ngOnInit() {//当组件初始化完成后开始异步请求服务器端数据
    this.http.get(this.url.indexApi).subscribe((res:any)=>{
      //对象结构可以吗？
      this.carouselItems = res.carouselItems;
      this.newArrivalItems = res.newArrivalItems;
      this.recommendedItems = res.recommendedItems;
      this.topSaleItems = res.topSaleItems

      console.log(this.recommendedItems)
      //已经查询到了所有的轮播广告项
      //然后启动轮播图动画
      this.mySlideList.startAutoplay() //轮播动画
    }) 
  }
}
