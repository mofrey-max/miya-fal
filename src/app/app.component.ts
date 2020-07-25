import { Component } from '@angular/core';

import { Platform, } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EventService } from './pages/services/event.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  appPages = [
    {
      title: 'settings',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];
  dark = false;
  public fontFamilyClass = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: EventService
  ) {
    this.initializeApp();
    this.initializeApp();
    this.events.subscribe(
      'update:font-family',
      (className) => {
        this.fontFamilyClass = className;
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => {
        this.splashScreen.hide();
        }, 500);
    });
  }
}
