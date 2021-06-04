import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // recieve input from herocomponent in var hero type Hero
  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
