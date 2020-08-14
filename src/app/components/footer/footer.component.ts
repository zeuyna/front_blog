import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Rs } from './../../models/rs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  rs: Array<Rs> = [];

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.request.getCollection('rs').subscribe(
      (response) => {
        this.rs = response.map(e => {
          return {
            name: e.payload.doc.data()['name'],
            link: e.payload.doc.data()['link'],
            icon: e.payload.doc.data()['icon']
          }
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
