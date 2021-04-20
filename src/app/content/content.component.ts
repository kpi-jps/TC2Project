import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  info : Content = {
    platform: 'Angular'
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}


