import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url == '/') {
        this.title = ''
      }
      if (event.url == '/tutos') {
        this.title = 'Tutoriels'
      }
      else if (event.url == '/subjects') {
        this.title = 'Travaux dirigés'
      }
    });
  }

}
