import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from 'angular4-material-table';

@Injectable()
export class studentValidatorService implements ValidatorService {
  getRowValidator(): FormGroup {
    return new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'grade': new FormControl(null, Validators.required),
      'isActive': new FormControl(null, Validators.required)
      });
  }
}
