import { Injectable } from '@angular/core';
import { CanActivate, NavigationEnd, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage-service';
import { AppRoutes } from 'src/app/enum/app-routes.type';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private localStorageService: LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(this.router.getCurrentNavigation(), route.url, state.url);
        if (this.localStorageService.getItem('authorization')) {
            if (state.url === `/${AppRoutes.login}` || state.url === '' || state.url === '/') {
                this.router.navigate([AppRoutes.Dashboard]);
            }
        } else {
            if (state.url !== `/${AppRoutes.login}`) {
                this.router.navigate([AppRoutes.login]);
            }
        }
        return true;
    }
}
