import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
	mobile: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 450) {
			// 768px portrait
			this.mobile = true;
		}
  }

}
