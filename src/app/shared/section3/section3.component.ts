import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {
  mobile: boolean | undefined;

  constructor(private modals: NgbModal) { }

  ngOnInit(): void {
    if (window.screen.width <= 450) { // 768px portrait
      this.mobile = true;
    }
  }

  openVid2(vid2: any) {
		this.modals.open(vid2, {
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop',
		});
		}

}
