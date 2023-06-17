import { ComponentRef, InjectionToken } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { DynamicFormComponentMap } from './dynamic-form-component-map.types';
import { DynamicFormControl } from './dynamic-form-control.types';
import { DynamicFormElement } from './dynamic-form-element.types';

export interface DynamicForm<M, V> {
  formGroup: FormGroup<Record<keyof V, AbstractControl>>;
  components: DynamicFormComponentDescriptor<M>[];
}

export interface DynamicFormComponentDescriptor<M> {
  config: DynamicFormElement<M>;
  component: ComponentRef<DynamicFormControl<M>>;
}

export const DYNAMIC_FORM_COMPONENT_MAP = new InjectionToken<DynamicFormComponentMap<unknown>>(
  'DYNAMIC_FORM_COMPONENT_MAP',
  {
    providedIn: 'root',
    factory: () => ({})
  }
);

export interface DynamicFormComponentStatus<V> {
  status: string;
  formGroup: FormGroup<Record<keyof V, AbstractControl>>;
}

export interface DynamicFormComponentValue<V> {
  value: V;
  formGroup: FormGroup<Record<keyof V, AbstractControl>>;
}
