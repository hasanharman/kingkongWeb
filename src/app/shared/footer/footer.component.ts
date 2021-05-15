import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
	sended?: boolean | false;

	ngOnInit(): void {}

	sendButton() {
		this.sended = true;
	}

	openWhy(what: any) {
		this.modalService.open(what, {
			centered: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
	openWhat(why: any) {
		this.modalService.open(why, {
			centered: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
	openWeb(web: any) {
		this.modalService.open(web, {
			centered: true,
			scrollable: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}

	openDev(dev: any) {
		this.modalService.open(dev, {
			centered: true,
			scrollable: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
	openContact(contact: any) {
		this.modalService.open(contact, {
			centered: true,
			scrollable: true,
			size: 'xl',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
	openLegal(legal: any) {
		this.modalService.open(legal, {
			scrollable: true,
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}

	openPrivacy(privacy: any) {
		this.modalService.open(privacy, {
			scrollable: true,
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
	}
}
