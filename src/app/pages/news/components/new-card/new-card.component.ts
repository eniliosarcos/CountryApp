import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/news.interface';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  @Input() new!:Article;
  constructor() { }

  ngOnInit(): void {
  }

}
