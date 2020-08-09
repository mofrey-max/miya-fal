import { Component, OnInit } from '@angular/core';
import { DatabaseService, Song } from '../services/database.service';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   song: Song[] = [];
   showSearchbar: boolean;
   public queryText: '';

   // holders of original unfiltered data:
  songs: Observable <Song[]>;
  

  // holders of data for filtered lists, initially set to empty array:
  filteredsongs: Song[] = [];


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


  /*  filterSong(ev: any) {
     this.song = this.song;
     const val = ev.target.value;
     if (val && val.trim() !== '') {
      this.song =  this.song.filter((item) => {
        return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.id.toString().indexOf(val.toLowerCase()) > -1;
    });
      this.song = this.song;
     }
   } */
  /*  public querySongs() {
    let    song: Song[] = [];
    song =  this.song.filter((item) => {
        return item.title.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1 ||
        item.id.toString().indexOf(this.queryText.toLowerCase()) > -1;
    });
    this.song = song;
  } */
  filterItems(event) {

    this.initializeItems();
    const val = event.target.value;
    if (val && val.trim() != '') {
      this.song = this.song.filter((item: Song) => {
        return (item.id.toString().indexOf(val.toLowerCase()) > -1 ||
        item.title.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }
  
  initializeItems() {
    this.song = this.song;
  }

 /*  filterItems(event) {
    this.initializeItems();
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.filteredsongs = this.filteredsongs.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        item.id.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  initializeItems() {
    this.songs = this.db.getSongList()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key : c.payload.key, ...c.payload.val()
        }))
      }

    );
    this.songs.subscribe( res => {
     this.filteredsongs = res;
  });

  } */
}


