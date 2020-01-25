import { NgModule } from "@angular/core";
import { AppLayoutRoutingModule } from './layout.routing.module';
import { AdminComponent } from './admin/admin.component';
import { TitleComponent } from './admin/title/title.component';
import { BreadcrumbsComponent } from './admin/breadcrumbs/breadcrumbs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [AppLayoutRoutingModule, SharedModule],
    declarations: [AdminComponent,
        TitleComponent,
        BreadcrumbsComponent]
})
export class AppLayoutModule {

}