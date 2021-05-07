import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.css' ],
	host: {
		'[style.display]': '"flex"',
		'[style.flex-direction]': '"column"',
		'[style.overflow]': '"auto"'
	}
})
export class FooterComponent implements OnInit {
	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {}

	openWeb(web: any) {
		this.modalService.open(web, {
			centered: true,
			size: 'm',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}

	openDev(dev: any) {
		this.modalService.open(dev, {
			centered: true,
			size: 'm',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
	openLegal(legal: any) {
		// this.modalService.open(legal, {
		// 	centered: true,
		// 	size: 'lg',
		// 	windowClass: 'dark-modal',
		// 	backdropClass: 'dark-backdrop',
		// 	scrollable: true
		// });
		this.modalService.open(legal, {
			scrollable: true,
			centered: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}

	openPrivacy(privacy: any) {
		this.modalService.open(privacy, {
			scrollable: true,
			centered: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
}
