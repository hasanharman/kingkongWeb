import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    .dark-backdrop {
      background-color: #000;
    }
  `
	]
})
export class HowitworksComponent implements OnInit {
	closeResult: string | undefined;
	sended?: boolean | false;
	constructor(private modalService: NgbModal) {}

	openModal(content: any) {
		this.modalService.open(content, {
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop',
		});
		this.sended = false;
	}

	sendButton() {
		this.sended = true;
	}

	scrollFooter() {
		window.scrollBy({behavior : "smooth", top: 1500});
		
	}
	ngOnInit(): void {}
}
