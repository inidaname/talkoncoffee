import {NgModule} from '@angular/core';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { SharedModule } from '../shared/shared.module';
// import {ComponentsModule} from '@scullyio/ng-lib'; // remove


@NgModule({
  declarations: [BlogComponent],
  imports: [
    BlogRoutingModule,
    SharedModule
  ],
})
export class BlogModule {}
