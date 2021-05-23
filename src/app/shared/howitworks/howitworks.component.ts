import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-howitworks',
	templateUrl: './howitworks.component.html',
	styleUrls: [ './howitworks.component.css' ],
	encapsulation: ViewEncapsulation.None,
	styles: [
		`
    .dark-modal .modal-content {
      background-color: #222127;
	  display: flex;
	  flex-direction: column;
	  overflow: hidden
    }
    .dark-modal .close {
      color: white;
    }
	.light-modal .header-modal {
		background-color: #222127;
    }
	.light-modal .modal-body {
	  background-color: #fff;

    }
    .dark-backdrop {
      background-color: #000;
    }
	.cookie-modal .modal-content {
    position: fixed;
    bottom: 0;
	left:0;
	background-color: #c2272d;
	border-radius: 0px;
    z-index: 10;
	}
  `
	],
	providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HowitworksComponent implements OnInit {
	closeResult: string | undefined;
	sended?: boolean | false;
	mobile: boolean | undefined;

	constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
		config.interval = 0;
		config.wrap = false;
		config.pauseOnHover = true;
		config.showNavigationArrows = true
	}
	openModal(content: any) {
		this.modalService.open(content, {
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop'
		});
		this.sended = false;
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

	sendButton() {
		this.sended = true;
	}

	scrollFooter() {
		window.scrollBy({ behavior: 'smooth', top: 1500 });
	}
	ngOnInit(): void {
		if (window.screen.width <= 450) {
			// 768px portrait
			this.mobile = true;
		}
	}
}
