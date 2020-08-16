import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TutoComponent implements OnInit {

  nameofarticle: string;
  article: Article;
  pageId: string;

  constructor(private request: RequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      (url) => {
        this.nameofarticle = url[1].path
        this.request.getItemWhere('articles', 'name', this.nameofarticle).subscribe(
          (response) => {
            this.article = response.map(e => {
              return {
                name: e.payload.doc.data()['name'],
                description: e.payload.doc.data()['description'],
                category: e.payload.doc.data()['category'],
                date: e.payload.doc.data()['date'],
                content: e.payload.doc.data()['content'],
                img: e.payload.doc.data()['img']
              }
            })[0]
            this.request.getImage(this.article.img).subscribe(
              (path) => {
                this.article.img = path
              },
              (error) => {
                console.log(error)
              }
            )
            this.article.date = new Date(1000 * this.article.date)
            this.pageId = this.article.name
          }
        )
      }
    )
  }

}
