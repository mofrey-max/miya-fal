import { Component, OnInit } from '@angular/core';
import { DatabaseService, Song } from '../services/database.service';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   song: Song[] = [];
   showSearchbar: boolean;
   public queryText: '';
   data: any;
   myControl = new FormControl();
   filteredData: Observable<any[]>;


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


  
  public querySongs() {
    let    song: Song[] = [];
    song =  this.song.filter((item) => {
        return item.title.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1 ||
        item.id.toString().indexOf(this.queryText.toLowerCase()) > -1;
    });
    this.song = song;
  }

 
}


