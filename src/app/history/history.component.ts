import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  videos:any;
  constructor(private http: HttpClient) { 
    this.http.get('https://www.testjsonapi.com/youtube-videos/').subscribe(data => {
      this.videos = data;
      }, error => console.error(error));
  }


  ngOnInit(): void {
  }

}
