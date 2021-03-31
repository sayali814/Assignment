import {NgModule} from '@angular/core';
import { MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatListModule,    
    MatRadioModule,   
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class DemoMaterialModule {}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */