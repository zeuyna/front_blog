import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute } from '@angular/router';
import { Td } from 'src/app/models/td';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TdComponent implements OnInit {

  td: any;
  pageId: string;

  constructor(private request: RequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      (path) => {
        this.request.getItemWhere('tds', 'name', path[1].path).subscribe(
          (response) => {
            this.td = response.map(e => {
              return {
                name: e.payload.doc.data()['name'],
                content: e.payload.doc.data()['content'],
                level: e.payload.doc.data()['level']
              }
            })[0]
            this.pageId = this.td.name
          }
        )
      }
    )
  }
}
