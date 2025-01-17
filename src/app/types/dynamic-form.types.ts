import { DynamicFormComponentMap, DynamicFormConfig } from '@elemental-concept/dynamic-form';

import { StringInputComponent } from '../components';
import { InputMetaDefault } from '../../../projects/lib/src/lib/types';

export interface FormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  misc: string;
}

export const customConfig = (textTransformer: (key: string) => string): DynamicFormConfig<InputMetaDefault, FormValue> => ({
  textTransformer,
  elements: [
    {
      id: 'firstName',
      label: 'module.auth.login.form.config.firstName',
      type: 'string',
      validators: [ { type: 'required' } ]
    },
    {
      id: 'lastName',
      label: 'module.auth.login.form.config.lastName',
      type: 'string',
      validators: [ { type: 'required' } ]
    },
    {
      id: 'email',
      label: 'module.auth.login.form.config.email',
      type: 'email',
      validators: [ { type: 'required' }, { type: 'email' } ]
    },
    {
      id: 'password',
      label: 'module.auth.login.form.config.password',
      type: 'password',
      validators: [ { type: 'required' } ]
    },
    {
      id: 'misc',
      label: 'module.auth.login.form.config.misc',
      type: 'string',
      dependsOn: [
        { id: 'firstName', type: 'equals', value: 'test' }
      ]
    }
  ]
});

export const customValue: FormValue = {
  firstName: 'Me',
  lastName: 'Myself',
  email: '',
  password: '',
  misc: ''
};

export const customComponentMap: DynamicFormComponentMap<InputMetaDefault, any> = {
  string: StringInputComponent,
  number: StringInputComponent,
  email: StringInputComponent,
  tel: StringInputComponent,
  url: StringInputComponent,
  password: StringInputComponent
};
