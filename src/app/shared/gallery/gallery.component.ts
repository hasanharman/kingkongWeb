import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: [ './gallery.component.css' ]
})
export class GalleryComponent implements OnInit {
	isShown1: boolean = true;
	isShown2: boolean = false;
	isShown3: boolean = false;
	isShown4: boolean = false;
	isActive: boolean = true;
	mobile: boolean | undefined;

	slides = [
		{ image: 'https://placekitten.com/200/300' },
		{ image: 'https://placekitten.com/200/300' },
		{ image: 'https://placekitten.com/200/300' },
		{ image: 'https://placekitten.com/200/300' },
		{ image: 'https://placekitten.com/200/300' },
		{ image: 'https://placekitten.com/200/300' },

	];

	constructor() {}

	ngOnInit(): void {
		if (window.screen.width <= 450) {
			// 768px portrait
			this.mobile = true;
		}
	}

	show1() {
		this.isShown1 = !this.isShown1;
		this.isShown2 = false;
		this.isShown3 = false;
		this.isShown4 = false;
		this.isActive = true;
	}
	show2() {
		this.isShown2 = !this.isShown2;
		this.isShown1 = false;
		this.isShown3 = false;
		this.isShown4 = false;
	}
	show3() {
		this.isShown3 = !this.isShown3;
		this.isShown1 = false;
		this.isShown2 = false;
		this.isShown4 = false;
	}
	show4() {
		this.isShown4 = !this.isShown4;
		this.isShown1 = false;
		this.isShown2 = false;
		this.isShown3 = false;
	}
}
