import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-destaque',
  templateUrl: './blog-destaque.component.html',
  styleUrls: ['./blog-destaque.component.css']
})
export class BlogDestaqueComponent implements OnInit {

  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
