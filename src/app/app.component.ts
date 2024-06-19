import { Component } from '@angular/core';

import { DynamicFormComponentStatus, DynamicFormComponentValue } from '@elemental-concept/dynamic-form';

import { customComponentMap, customConfig, customValue, FormValue } from './types';
import { TranslationHelperService } from './translation-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  // set config
  customConfig = customConfig(this.translationHelperService.textTransformer);

  customValue = customValue;

  customComponentMap = customComponentMap;

  customStatus = 'INVALID';

  customFormValue: FormValue = customValue;

  constructor(private readonly translationHelperService: TranslationHelperService) {
  }

  onCustomVStatusChanges = (data: DynamicFormComponentStatus<FormValue>) => this.customStatus = data.status;

  onCustomValueChanges = (data: DynamicFormComponentValue<FormValue>) => this.customFormValue = data.value as FormValue;
}
