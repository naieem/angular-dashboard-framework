import {Injectable} from '@angular/core';
import {SiteRoute} from '../../routes';
@Injectable({providedIn: 'root'})
export class CoreService {

  constructor() {}
  getRouteConfig() {
    return SiteRoute;
  }
  getVisibleRoutes(){
    let routes = [];
    SiteRoute.map((value,index)=>{
      // console.log(value);
      if(value.data && value.data.MenuShow){
        routes.push({
          route:value.data.Route,
          title:value.data.MenuTitle
        });
      }
    });
    return routes;
  }
}
