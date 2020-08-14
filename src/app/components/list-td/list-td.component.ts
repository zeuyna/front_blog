import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-list-td',
  templateUrl: './list-td.component.html',
  styleUrls: ['./list-td.component.scss']
})
export class ListTdComponent implements OnInit {

  @Input() nbrElement: string;
  tds: any;

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    if (this.nbrElement) {
      this.request.getCollection('tds').subscribe(
        (response) => {
          this.tds = response.map(e => {
            return {
              name: e.payload.doc.data()['name']
            }
          })
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }
}
