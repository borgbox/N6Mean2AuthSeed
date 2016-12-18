import { TRANSLATION_PT_BR } from './locale/messages.pt-BR';
import { Injectable } from '@angular/core';
import { TRANSLATION_EN } from './locale/messages';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale() {
    return 'pt-BR';
  }

  getTranslationContent() {
    return TRANSLATION_PT_BR;
  }

}