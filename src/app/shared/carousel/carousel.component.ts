import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TweenMax } from 'gsap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: [ './carousel.component.css' ]
})
export class CarouselComponent implements OnInit {
	@ViewChild('cookie') cookie: any;
	closeResult: string | undefined;
	activeImg: number = 0;
	mobile: boolean | undefined;
	imgs: Array<string> = [ 'img0.svg', 'img1.svg' ];

	paginations = [
		{ title: 'Etkinliklerinizi Taçlandırır', sub: 'KingKong’la Tanışın' },
		{ title: 'Benzersiz Bir Dünya', sub: 'Sanal Etkinliklerde' }
	];
	// cookie = [
	//   {title: 'KingKong KVKK ve ÇEREZLER', icon:'', content: 'İnternet sitemizde sizlere daha iyi bir hizmet sunabilmek için çerez kullanıyoruz. Konu ile ilgili daha detaylı bilgi almak için Çerez Bilgilendirme Metnini ve internet sitemiz kapsamındaki kişisel veri işleme faaliyetlerimize ilişkin bilgi almak için İnternet Sitesi KVK Bilgilendirme Metnini ziyaret edebilirsiniz.'}
	// ];

	constructor(private modals: NgbModal) {
		
	}
	ngOnInit(): void {
		if (window.screen.width <= 450) { // 768px portrait
			this.mobile = true;
		  }
	}
	// ngAfterViewInit() {
	// 	this.openCookies()
	//   }

	openVideo(video: any) {
		this.modals.open(video, {
			centered: true,
			size: 'lg',
			windowClass: 'dark-modal',
			backdropClass: 'dark-backdrop',
		});
	}

	openCookies() {
		this.modals.open(this.cookie, { windowClass: 'cookie-modal', backdropClass: 'dark-backdrop', animation: false});
	}

	openLegal(legal: any) {
		this.modals.open(legal, {
			scrollable: true,
			centered: true,
			size: 'xl',
			windowClass: 'light-modal',
			backdropClass: 'dark-backdrop'
		});
	}

	openPrivacy(privacy: any) {
		this.modals.open(privacy, {
			scrollable: true,
			centered: true,
			size: 'xl',
			windowClass: 'light-modal',
			backdropClass: 'dark-backdrop'
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
