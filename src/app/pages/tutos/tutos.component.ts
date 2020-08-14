import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Category } from './../../models/category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutos',
  templateUrl: './tutos.component.html',
  styleUrls: ['./tutos.component.scss']
})
export class TutosComponent implements OnInit {

  categories: Array<Category>;

  constructor() { }

  ngOnInit(): void {
  }

}
