import { FormInputBase } from "./FormInputBase";

export class FormCheckbox extends FormInputBase<string> {
  override controlType = 'checkbox';
}
