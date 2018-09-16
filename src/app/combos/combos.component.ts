import { Component, OnInit } from '@angular/core';
import { CarrerasService } from '../servicios/carreras.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
  title = 'servidor';
  posts = [];
  constructor(private dataService: CarrerasService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }
  ngOnInit() {
  }

}
