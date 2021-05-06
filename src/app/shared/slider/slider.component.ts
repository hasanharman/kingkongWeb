import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TweenMax } from 'gsap';
declare var $: any;

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: [ './slider.component.css' ]
})
export class SliderComponent implements OnInit {
	activeImg: number = 1;
	// imgs: Array<string> = ['card1.png','card2.png','card3.png','card4.png'];

	imgs = [
		{ img: 'card1.png', icon: 'cup.svg', title: 'Kongre / Konferans', sub: '' },
		{ img: 'card2.png', icon: 'chat.svg', title: 'Dönem Toplantıları', sub:'' },
		{ img: 'card3.png', icon: 'present.svg', title: 'Sergi / Fuar', sub: '' }
	];

	totalItems = this.imgs.length;

	constructor(private modals: NgbModal) {}

	ngOnInit(): void {}

	// prev() {
	// 	console.log(this.activeImg * 230);
	// 	TweenMax.fromTo(
	// 		'.card-0',
	// 		0.5,
	// 		{
	// 			css: {
	// 				'margin-left': this.activeImg * 230
	// 			}
	// 		},
	// 		{
	// 			css: {
	// 				'margin-left': (this.activeImg - 1) * 230
	// 			}
	// 		}
	// 	);
	// 	this.activeImg -= 1;
	// }

	openSmart(specs: any) {
		this.modals.open(specs, {
			scrollable: true,
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop',
		});
		}

	prev() {
		console.log(this.activeImg);
		TweenMax.fromTo(
			`.card-image-${this.imgs[this.activeImg].img}`,
			0.5,
			{
				css: {
					'margin-left': this.activeImg * 230
				}
			},
			{
				css: {
					'margin-left': (this.activeImg - 1) * 230
				}
			}
		);
		this.activeImg -= 1;
	}

	next() {
		console.log(`.card-image-${this.imgs[this.activeImg].img}`);
		console.log(this.activeImg);
		TweenMax.fromTo(
			'.card-0',
			0.5,
			{
				css: {
					'margin-left': this.activeImg * 230
				}
			},
			{
				css: {
					'margin-left': (this.activeImg + 1) * 230
				}
			}
		);
		this.activeImg += 1;
	}
}
