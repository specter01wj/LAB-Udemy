import { Inject, Injectable } from '@angular/core';
import { FooConfig } from '../model/fooconfig';

@Injectable({
  providedIn: 'root'
})
export class FooService {
  fooconfig?: FooConfig;



  constructor(@Inject('config') private config: FooConfig) {
    this.fooconfig = config;
  }
}
