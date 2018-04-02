import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'upload-videos', loadChildren: './upload-videos/upload-videos.module#UploadVideosModule' },
            { path: 'watch-videos', loadChildren: './watch-videos/watch-videos.module#WatchVideosModule' },
            { path: 'manage-videos', loadChildren: './manage-videos/manage-videos.module#ManageVideosModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class LayoutRoutingModule { }
