import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.scss']
})
export class ListMatiereComponent implements OnInit {

  @Input() nbrElement: string;
  tds: any;

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    if (this.nbrElement) {
      this.request.getXItem('matieres', parseInt(this.nbrElement)).subscribe(
        (response) => {
          this.tds = response.map(e => {
            return {
              wording: e.payload.doc.data()['wording'],
              img: e.payload.doc.data()['img']
            }
          })
          for (const iterator of this.tds) {
            this.request.getImage(iterator.img).subscribe(
              (response) => {
                iterator.img = response
              },
              (error) => {
                console.log(error)
              }
            )
          }
        },
        (error) => {
          console.log(error)
        }
      )
    }
    else {
      this.request.getCollection('matieres').subscribe(
        (response) => {
          this.tds = response.map(e => {
            return {
              wording: e.payload.doc.data()['wording'],
              img: e.payload.doc.data()['img']
            }
          })
          for (const iterator of this.tds) {
            this.request.getImage(iterator.img).subscribe(
              (response) => {
                iterator.img = response
              },
              (error) => {
                console.log(error)
              }
            )
          }
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

}
