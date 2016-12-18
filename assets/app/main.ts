import './polyfills';
import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./app.module";
import { SettingsService } from './settings.service';
platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [
        SettingsService,
        /*{ provide: TRANSLATIONS, useValue: TRANSLATION_SV },*/
        {
            provide: TRANSLATIONS,
            deps: [SettingsService],
            useFactory: (settingsService) => settingsService.getTranslationContent()
        },
        { provide: TRANSLATIONS_FORMAT, useValue: "xlf" },
        /*{ provide: LOCALE_ID, useValue: 'en' }*/
        {
            provide: LOCALE_ID,
            deps: [SettingsService],
            useFactory: (settingsService) => settingsService.getLocale()
        }

    ]
});