import { Component, OnInit } from '@angular/core';
import { DatabaseService, Song } from '../services/database.service';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   song: Song[] = [];
   showSearchbar: boolean;
  //  public queryText: '';


  // holders of data for filtered lists, initially set to empty array:
  filteredsongs: Observable <Song[]>;


   constructor( public http: HttpClient, private db: DatabaseService, private platform: Platform) {
    this.platform.ready().then(() => {
       }).catch(error => {
         console.log(error);
       });
   }

    ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getSong().subscribe(content => {
          this.song = content;
        });
      }
    });
   }

  /*  public querySongs() {
    let    song: Song[] = [];
    song =  this.song.filter((item) => {
        return item.title.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1 ||
        item.id.toString().indexOf(this.queryText.toLowerCase()) > -1;
    });
    this.song = song;
  } */

  doFilter(val) {
    this.filteredData =  this.data.map(data => data.articles).map(options =>
      options.filter(option => 
         option.title.toLowerCase().indexOf(val.value.toLowerCase()) > -1)
      );
  }
}


