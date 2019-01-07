import {Injectable} from '@angular/core';
import {SiteRoute} from '../../routes';
@Injectable({providedIn: 'root'})
export class CoreService {

  constructor() {}
  getRouteConfig() {
    return SiteRoute;
  }
}
