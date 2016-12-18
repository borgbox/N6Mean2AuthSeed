import { TRANSLATION_PT_BR } from './locale/messages.pt-BR';
import { Injectable } from '@angular/core';
import { TRANSLATION_EN } from './locale/messages';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale() {
    switch (navigator.language) {
      case 'pt-BR':
        return 'pt-BR';
      case 'en-US':
        return 'en-US';
      default:
        return 'en-US';
    }
  }

  getTranslationContent() {

    switch (navigator.language) {
      case 'pt-BR':
        return TRANSLATION_PT_BR;
      case 'en-US':
        return TRANSLATION_EN;
      default:
        return TRANSLATION_EN;
    }
  }

}