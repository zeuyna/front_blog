import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from './../../service/request.service';
import { Article } from './../../models/article';

@Component({
  selector: 'app-list-tuto',
  templateUrl: './list-tuto.component.html',
  styleUrls: ['./list-tuto.component.scss']
})
export class ListTutoComponent implements OnInit {

  @Input() nbrElement: string;
  article: Array<Article>;

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    if (this.nbrElement) {
      this.request.getXItem('articles', parseInt(this.nbrElement)).subscribe(
        (response) => {
          this.article = response.map(e=>{
            return {
              name: e.payload.doc.data()['name'],
              category: e.payload.doc.data()['category'],
              description: e.payload.doc.data()['description'],
              date: e.payload.doc.data()['date'],
              img: e.payload.doc.data()['img']
            }
          })
          for (const iterator of this.article) {
            iterator.date = new Date(iterator.date * 1000)
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
      this.request.getCollection('articles').subscribe(
        (response) => {
          this.article = response.map(e => {
            return {
              name: e.payload.doc.data()['name'],
              category: e.payload.doc.data()['category'],
              description: e.payload.doc.data()['description'],
              date: e.payload.doc.data()['date'],
              img: e.payload.doc.data()['img']
            }
          })
          for (const iterator of this.article) {
            iterator.date = new Date(iterator.date * 1000)
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
