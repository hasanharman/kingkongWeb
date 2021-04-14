import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: [ './carousel.component.css' ]
})
export class CarouselComponent implements OnInit {
	activeImg: number = 0;
	imgs: Array<string> = [ 'img0.svg', 'img1.svg' ];

	constructor() {}

	ngOnInit(): void {}

	selectImg(index: number) {
		TweenMax.to(`.carousel-img-${this.activeImg}`, 0.5, {
			css: {
				opacity: 0
			}
		});
		TweenMax.to(`.carousel-img-${index}`, 0.5, {
			css: {
				opacity: 1
			}
		});
		this.activeImg = index;
	}
}
