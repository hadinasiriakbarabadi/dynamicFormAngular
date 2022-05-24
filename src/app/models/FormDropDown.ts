import { FormInputBase } from "./FormInputBase";

export class FormDropdown extends FormInputBase<string> {
  override controlType = 'dropdown';
}
