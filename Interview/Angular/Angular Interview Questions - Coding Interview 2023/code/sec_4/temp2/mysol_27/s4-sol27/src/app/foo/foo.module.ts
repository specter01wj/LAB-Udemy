import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { FooConfig } from '../model/fooconfig';
import { FooService } from '../service/foo.service';
import { FooComponent } from './foo/foo.component';


@NgModule({
  declarations: [
    FooComponent
  ],
  imports: [
    CommonModule,
    FooRoutingModule
  ]
})
export class FooModule {
  static forRoot(config: FooConfig): ModuleWithProviders<FooModule> {
    return {
      ngModule: FooModule,
      providers: [FooService, { provide: 'config', useValue: config }]
    }
  }
}
