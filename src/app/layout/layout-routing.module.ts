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
            { path: 'watch-video/:id', loadChildren: './watch-video/watch-video.module#WatchVideoModule',data : {originalId : 'some value'} },
            { path: 'manage-videos', loadChildren: './manage-videos/manage-videos.module#ManageVideosModule' },
            { path: 'manage-video/:id', loadChildren: './manage-video/manage-video.module#ManageVideoModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class LayoutRoutingModule { }
