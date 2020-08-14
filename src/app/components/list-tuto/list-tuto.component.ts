import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from './../../service/request.service';
import { Article } from './../../models/article';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tuto',
  templateUrl: './list-tuto.component.html',
  styleUrls: ['./list-tuto.component.scss']
})
export class ListTutoComponent implements OnInit {

  @Input() nbrElement: string;
  article: Array<Article>;
  selected: string = 'Catégories';
  categories: any;
  category: boolean = false;

  constructor(private request: RequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.category)
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
      this.category = true
      this.request.getCollection('categories').subscribe(
        (response) => {
          this.categories = response.map(e => {
            return {
              wording: e.payload.doc.data()['wording']
            }
          })
        }
      )
      this.route.queryParamMap.subscribe(
        (params) => {
          if (params.get('category') && params.get('category') != 'all') {
            this.request.getItemWhere('articles', 'category', params.get('category')).subscribe(
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
      )
    }
  }

  onChange() {
    this.router.navigate(['tutos'], { queryParams: { category: this.selected}})
  }
}
