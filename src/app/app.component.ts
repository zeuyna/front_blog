import { Component, OnInit, ViewEncapsulation, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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

  constructor (private renderer: Renderer2, @Inject(DOCUMENT) document) {
  }

  ngOnInit() {
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
