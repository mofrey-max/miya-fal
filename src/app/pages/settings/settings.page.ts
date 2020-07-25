import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-setting',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public fontFamily = '';
  fontSize;

  ngOnInit() {
  }



  constructor(@Inject(DOCUMENT) private document: Document, private events: EventService, private cdr: ChangeDetectorRef, ) {}

  onChange(fontsize) {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('style', `font-size: ${fontsize}rem`);
    this.cdr.detectChanges();
    console.log(body);
    // fontsize
  }

  onFontFamilyChange(ev: CustomEvent) {
    const val = ev.detail.value;
    this.events.publish(
      'update:font-family',
      val
    );
  }

}
