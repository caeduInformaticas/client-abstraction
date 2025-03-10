import { Injectable } from '@angular/core';
import { Clients } from 'src/app/base/enum/client.enum';
import { ColorsProvider } from 'src/app/base/interface/register.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { }

  public applyTheme(theme: ColorsProvider) {
    document.documentElement.style.setProperty('--ion-color-primary', theme.primary);
    document.documentElement.style.setProperty('--ion-color-secondary', theme.secondary);
  }
}