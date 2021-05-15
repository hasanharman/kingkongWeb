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
	isShown1: boolean = false ;
	// imgs: Array<string> = ['card1.png','card2.png','card3.png','card4.png'];

	imgs1 = [
		{ img: 'akıllıasistan/akilli-asistan.png', icon: 'akıllıasistan/virtual-assistant-2.svg', title: 'Akıllı Asistan', sub: '' },
		{ img: 'analitikraporlama/analitik-raporlama.png', icon: 'analitikraporlama/document-copy1.svg', title: 'Analitik Raporlama', sub:'' },
		{ img: 'anket/anket.png', icon: 'anket/tripod1.svg', title: 'Anket', sub: '' },
		{ img: 'backpack/backpack.png', icon: 'backpack/multiple-11.svg', title: 'Backpack', sub: '' },
	];

	imgs = [
		{ img: 'DinamikKişiselleştirilmişmarkalama/dinamik-kisisellestirilmis-markalama.png', icon: 'DinamikKişiselleştirilmişmarkalama/billboard1.svg', title: 'Dinamik Kişiselleştirilmiş Markalama', sub:'' },
		{ img: 'dönemtoplantıları/donem-toplantilari.png', icon: 'dönemtoplantıları/meetingicon.svg', title: 'Dönem Toplantıları', sub: '' },
		{ img: 'fuarsergi/fuar-sergi.png', icon: 'fuarsergi/fuar-sergi-icon.svg', title: 'Fuar / Sergi', sub: '' },
		{ img: 'kongre konferans/kongre-konferans.png', icon: 'kongre konferans/kongre-icon.svg', title: 'Kongre / Konferans', sub: '' },
		{ img: 'Lansman Toplantıları/lansman-toplantilari.png', icon: 'Lansman Toplantıları/lansman-toplantilari-icon.svg', title: 'Lansman Toplantıları', sub:'' },
		{ img: 'networking seçenekler/networking-secenekleri.png', icon: 'networking seçenekler/hierarchy-55 1.svg', title: 'Networking Seçenekleri', sub: '' },
		{ img: 'oyun alanları/oyun-alanlari.png', icon: 'oyun alanları/present.svg', title: 'Oyun Alanları', sub: '' },
		{ img: 'özel odalar/ozel-odalar.png', icon: 'özel odalar/virtual-environment 1.svg', title: 'Özel Odalar', sub: '' },
		{ img: 'stand alanları/stand-alanlari.png', icon: 'stand alanları/tripod 1.svg', title: 'Stand Alanları', sub:'' },
		{ img: 'toplantı notları/toplanti-notlari.png', icon: 'toplantı notları/meeting-notes.svg', title: 'Toplantı Notları', sub: '' },
		{ img: 'yüksek performans/yuksek-performans.png', icon: 'yüksek performans/multiple-11 1.svg', title: 'Yüksek Performans', sub: '' },
		{ img: 'Zenginleştirilmiş İletişim/zenginlestirilmiş-iletisim.png', icon: 'Zenginleştirilmiş İletişim/voice-record 1.svg', title: 'Zenginleştirilmiş İletişim', sub: '' }

	];

	// totalItems = this.imgs.length;

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

	// openSmart(specs: any) {
	// 	this.modals.open(specs, {
	// 		scrollable: true,
	// 		centered: true,
	// 		size: 'lg',
	// 		windowClass: 'dark-modal',
	// 		backdropClass: 'dark-backdrop',
	// 	});
	// 	}

	loadmore() {
		this.isShown1 = ! this.isShown1;
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
