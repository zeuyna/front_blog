import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Td } from '../../models/td';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {

  td: Array<Td>;
  tdByLevel: Array<any>;
  matieres: Array<any>;

  constructor(private route: ActivatedRoute, private request: RequestService) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      (path) => {
        this.tdByLevel = []
        this.request.getItemWhere('tds', 'matiere', path[1].path).subscribe(
          (response) => {
            this.td = response.map(e => {
              return {
                name: e.payload.doc.data()['name'],
                level: e.payload.doc.data()['level']
              }
            })
            var levels = []
            for (const iterator of this.td) {
              if (levels.includes(iterator.level)) {
                for (let index = 0; index < this.tdByLevel.length; index++) {
                  const element = this.tdByLevel[index];
                  if (element.level == iterator.level) {
                    element.td.push(iterator.name)
                  }
                }
              }
              else {
                this.tdByLevel.push({level: iterator.level, td: [iterator.name]})
                levels.push(iterator.level)
              }
            }
            this.tdByLevel.sort((a, b) => (a.level > b.level) ? 1 : -1)
          }
        )
      }
    )
    this.request.getCollection('matieres').subscribe(
      (response) => {
        this.matieres = response.map(e => {
          return {
            wording: e.payload.doc.data()['wording'],
            color: e.payload.doc.data()['color']
          }
        })
        console.log(this.matieres)
      }
    )
  }

}
