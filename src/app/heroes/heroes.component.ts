import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id: 1,
    name: 'Windstrom'
  };
  constructor() { }

  //initial logic when load this page
  ngOnInit(): void {
  }

}
