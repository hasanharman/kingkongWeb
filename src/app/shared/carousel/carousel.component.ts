import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: [ './carousel.component.css' ]
})
export class CarouselComponent implements OnInit {
	closeResult: string | undefined;
	activeImg: number = 0;
	imgs: Array<string> = [ 'img0.svg', 'img1.svg' ];

	paginations = [
		{ title: 'Etkinliklerinizi Taçlandırır', sub: 'KingKong’la Tanışın' },
		{ title: 'Benzersiz Bir Dünya', sub: 'Sanal Etkinliklerde' }
	];
	constructor(private modals: NgbModal) {
  }

	ngOnInit(): void {
		// this.loop
	}

	openVideo(video: any) {
		this.modals.open(video, {
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop',
		});
		}

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
		// TweenMax.set(`.page-slider:before`, {
		// 	css: {
		// 		border: '1px solid rgba(255, 255, 255, 0)',
		// 		width: 0
		// 	}
		// })
		this.activeImg = index;
		this.animation.kill();
		this.animation;
	}

	// loop = setInterval(() => {
	// 	if (this.activeImg + 1 < this.imgs.length) {
	// 		this.selectImg(this.activeImg + 1);
	// 	} else {
	// 		this.selectImg(0);
	// 	}
	// }, 5000);

	animation = TweenMax.fromTo(
		`.page-slider-${this.activeImg}:before`,
		5,
		{
			css: {
				opacity: 0
			}
		},
		{
			css: {
				opacity: 1
			}
		}
	);
}
