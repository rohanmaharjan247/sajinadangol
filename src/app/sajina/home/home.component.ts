import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:HttpClient, private _fileSaver:FileSaverService) { }

  ngOnInit() {
  }

  download(){
    const filename="SajinaDangol.pdf";
    this._http.get("assets/files/sajinacv.pdf",{
      observe:'response',
      responseType: 'blob'
    }).subscribe(res =>{
      this._fileSaver.save(res.body, filename);
    })
  }

}
