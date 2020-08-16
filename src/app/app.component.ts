import { Component, OnInit, ViewEncapsulation, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'front';
  checkTheme: boolean = false
  color: string;
  about: boolean = true;

  constructor (private renderer: Renderer2, @Inject(DOCUMENT) document, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url == "/about") {
        this.about = false
      }
      else {
        this.about = true
      }
    });
  }

  changeTheme() {
    if(this.checkTheme) {
      this.renderer.setAttribute(document.body, 'id', 'dark')
    }
    else {
      this.renderer.removeAttribute(document.body, 'id')
    }
  }
}
