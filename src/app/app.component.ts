import { Component } from '@angular/core';


import { FormCheckbox } from './models/FormCheckBox';
import { FormInputBase } from './models/FormInputBase';
import { FormTextbox } from './models/FormTextbox';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>My dynamic form</h2>
      <app-dynamic-form [formFields]="myForm"></app-dynamic-form>
    </div>
  `,
})
export class AppComponent {
  myForm: FormInputBase<string | boolean>[] = [
    new FormTextbox({
     key: 'title',
     type: 'text',
     required: true,
    }),

    new FormTextbox({
      key: 'name',
      type: 'text',
      required: true,
    }),
    
    new FormCheckbox({
      key: 'readAgreement',
      required: true,
    }),
  ];
}
