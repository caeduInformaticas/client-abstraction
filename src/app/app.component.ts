import { Component, inject } from '@angular/core';
import { NgComponentOutlet, CommonModule } from '@angular/common';
import { ThemeService } from './base/services/theme.service';
import { MainProviderFactory } from './provider/main.provider';
import { RegisterComponentType } from './base/interface/register.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [NgComponentOutlet, CommonModule],
  standalone: true,
})

export class AppComponent {
  private providerFactory!: MainProviderFactory;
  themeService: ThemeService = inject(ThemeService);
  public componentType!: RegisterComponentType; 
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    this.providerFactory = new MainProviderFactory();
    this.startClientB();
  }

  startClientA() {
    const provider = this.providerFactory.getClientA();
    if (provider) {
      this.componentType = provider.component;
      this.themeService.applyTheme(provider.colors);
    }
  }

  startClientB() {
    const provider = this.providerFactory.getClientB();
    if (provider) {
      this.componentType = provider.component;
      this.themeService.applyTheme(provider.colors);
    }
  }

}
