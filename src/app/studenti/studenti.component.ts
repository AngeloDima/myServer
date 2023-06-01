import { Component, OnInit } from '@angular/core';
import { ScuolaService } from '../scuola.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.scss']
})
export class StudentiComponent implements OnInit {

  constructor(private scuServ: ScuolaService) { }
  ngOnInit(): void {
    this.loadData()
  }

  data?: any

  loadData() {
    this.scuServ.getData().subscribe((data: any) => { this.data = data })
  }

}



