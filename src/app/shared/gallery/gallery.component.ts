import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: [ './gallery.component.css' ],
	providers: [NgbCarouselConfig, NgbDropdownConfig]  // add NgbCarouselConfig to the component providers
})
export class GalleryComponent implements OnInit {
	isShown1: boolean = true;
	isShown2: boolean = false;
	isShown3: boolean = false;
	isShown4: boolean = false;
	isActive: boolean = true;
	mobile: boolean | undefined;
	searchSelector = "Ana Giriş";

	anagiris = [
		{ image: '../../../assets/gallery/ag1.webp' },
		{ image: '../../../assets/gallery/ag2.webp' },
		{ image: '../../../assets/gallery/ag3.webp' },
		{ image: '../../../assets/gallery/ag4.webp' },
		{ image: '../../../assets/gallery/ag5.webp' },
		{ image: '../../../assets/gallery/ag6.webp' },
		{ image: '../../../assets/gallery/ag7.webp' },
	];

	networking = [
		{ image: '../../../assets/gallery/na1.webp' },
		{ image: '../../../assets/gallery/na2.webp' },
		{ image: '../../../assets/gallery/na3.webp' },
		{ image: '../../../assets/gallery/na4.webp' },
		{ image: '../../../assets/gallery/na5.webp' },
		{ image: '../../../assets/gallery/na6.webp' },
		{ image: '../../../assets/gallery/na7.webp' },
	];

	stand = [
		{ image: '../../../assets/gallery/sa1.webp' },
		{ image: '../../../assets/gallery/sa2.webp' },
		{ image: '../../../assets/gallery/sa3.webp' },
		{ image: '../../../assets/gallery/sa4.webp' },
		{ image: '../../../assets/gallery/sa5.webp' },
		{ image: '../../../assets/gallery/sa6.webp' },
		{ image: '../../../assets/gallery/sa7.webp' },
	];

	toplanti = [
		{ image: '../../../assets/gallery/ts1.webp' },
		{ image: '../../../assets/gallery/ts2.webp' },
		{ image: '../../../assets/gallery/ts3.webp' },
		{ image: '../../../assets/gallery/ts4.webp' },
		{ image: '../../../assets/gallery/ts5.webp' },
		{ image: '../../../assets/gallery/ts6.webp' },
		{ image: '../../../assets/gallery/ts7.webp' },
	];


	constructor(config: NgbCarouselConfig, drop: NgbDropdownConfig) {
		config.interval = 0;
		config.wrap = false;
		config.pauseOnHover = true;
		config.showNavigationArrows = true;
		drop.placement = 'bottom-right';
		drop.autoClose = true;
	}

	ngOnInit(): void {
		if (window.screen.width <= 450) {
			// 768px portrait
			this.mobile = true;
		}
	}


	show1(value: any) {
		this.isShown1 = !this.isShown1;
		this.isShown2 = false;
		this.isShown3 = false;
		this.isShown4 = false;
		this.isActive = true;		this.searchSelector = value;

	}
	show2(value: any) {
		this.isShown2 = !this.isShown2;
		this.isShown1 = false;
		this.isShown3 = false;
		this.isShown4 = false;
		this.searchSelector = value;
	}
	show3(value: any) {
		this.isShown3 = !this.isShown3;
		this.isShown1 = false;
		this.isShown2 = false;
		this.isShown4 = false;
		this.searchSelector = value;
	}
	show4(value: any) {
		this.isShown4 = !this.isShown4;
		this.isShown1 = false;
		this.isShown2 = false;
		this.isShown3 = false;
		this.searchSelector = value;
	}
}
