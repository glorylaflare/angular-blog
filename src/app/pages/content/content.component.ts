import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string="https://media.nature.com/lw767/magazine-assets/d41586-023-01467-2/d41586-023-01467-2_25257904.jpg?as=webp"
  @Input()
  contentTitle:string="Como é estar em minoria em uma conferência"
  @Input()
  contentDescription:string="Pesquisadoras mulheres e negras descrevem os impactos do sexismo e do racismo em conferências"

  constructor() { }

  ngOnInit(): void {
  }

}
