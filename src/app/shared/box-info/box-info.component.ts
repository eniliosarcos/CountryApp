import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss']
})
export class BoxInfoComponent implements OnInit {

  @Input() text!:string

  constructor() { }

  ngOnInit(): void {
  }

}
