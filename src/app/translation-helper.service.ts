import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationHelperService {
  constructor(private readonly translateService: TranslateService) {
  }

  textTransformer = (key: string): string => {
    try {
      return this.translateService.instant(key);
    } catch (e) {
      return key;
    }
  };
}
