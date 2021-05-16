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
	isShown1: boolean = false;
	clicked: boolean = false;
	changeText: boolean = false;
	// imgs: Array<string> = ['card1.png','card2.png','card3.png','card4.png'];

	imgs1 = [
		{ img: 'kongre konferans/kongre-konferans.png', icon: 'kongre konferans/kongre-icon.svg', title: 'Kongre / Konferans', sub: 'Her etkinlik farklı ve özeldir, bu nedenle ihtiyaçları da farklıdır. KingKong bu farklı ve özel ihtiyaçları yenilikçi teknolojisi ve kreatif bakış açısıyla dijital ortamda ya da hibrit olarak çözer ve  gerçek bir kongre & konferans deneyimi yaşatır.' },
		{ img: 'dönemtoplantıları/donem-toplantilari.png', icon: 'dönemtoplantıları/meetingicon.svg', title: 'Dönem Toplantıları', sub: 'KingKong, toplantınızın büyüklüğü, yaratmak istediğiniz imajı ve çerçevesi doğrultusunda size özel tasarımlar, teknik altyapı ve deneyimli bir ekip ile toplantınızı hedefleriniz doğrultusunda kusursuz bir şekilde planlar ve gerçekleştirir.' },
		{ img: 'fuarsergi/fuar-sergi.png', icon: 'fuarsergi/fuar-sergi-icon.svg', title: 'Fuar / Sergi', sub: 'KingKong toplantılarınızda farklılık yaratmak ve diğerlerinden farklı olmak istediğinizi bilir. Bunun için yeni, farklı, benzersiz kreatif ve hibrit çözümler sunar.' },
		{ img: 'Lansman Toplantıları/lansman-toplantilari.png', icon: 'Lansman Toplantıları/lansman-toplantilari-icon.svg', title: 'Lansman Toplantıları', sub:'Küçük, orta ve büyük ölçekli tüm fuar ve sergileriniz için ihtiyaçlarınızın tam olarak karşılayacak hibrit çözümlerle unutulmaz organizasyonlar gerçekleştirir.' }
	];

	imgs = [
		{ img: 'akıllıasistan/akilli-asistan.png', icon: 'akıllıasistan/virtual-assistant-2.svg', title: 'Akıllı Asistan', sub: 'Her kullanıcıya özel sanal asistan atanır.  Etkinlik içinde kullanıcıyı, kullanıcının özelliklerine göre yönlendirir. İlgi alanlarına göre doğru kişilerle bağlantı kurmasını sağlar, ilgi alanına göre bilgilendirmeler yapar. ' },
		{ img: 'Zenginleştirilmiş İletişim/zenginlestirilmiş-iletisim.png', icon: 'Zenginleştirilmiş İletişim/voice-record 1.svg', title: 'Zenginleştirilmiş İletişim', sub: 'Yüksek çözünürlüklü ses ve görüntü altyapısı ile özel alanlarda, tekil ya da çoklu görüşme seçeneği sunar.' },
		{ img: 'networking seçenekler/networking-secenekleri.png', icon: 'networking seçenekler/hierarchy-55 1.svg', title: 'Networking Seçenekleri', sub: 'Kişileri taleplerine göre farklı kişilerle bir araya getirerek bilgi alışverişi olanağı sağlar. Dijital vCard paylaşımı, linked-in gibi profesyonel platform entegrasyonları, anlık Clubhouse/King Talks oluşturma ve katılımı, özel toplantılar gibi seçenekler sunar.' },
		{ img: 'toplantı notları/toplanti-notlari.png', icon: 'toplantı notları/meeting-notes.svg', title: 'Toplantı Notları', sub: 'Uygulama içinden toplantı notları alınabilir, herhangi bir anda yeni bir not, yapılabilecekler listesi oluşturulabilir ve sonrasında katılımcılara e-mail olarak atılabilir.' },
		{ img: 'yüksek performans/yuksek-performans.png', icon: 'yüksek performans/multiple-11 1.svg', title: 'Yüksek Performans', sub: '100K katılımcıya kadar katılımcıya ulaşma olanağı.' },
		{ img: 'analitikraporlama/analitik-raporlama.png', icon: 'analitikraporlama/document-copy1.svg', title: 'Analitik Raporlama', sub: 'Kullanıcıların bütün davranışlarını, aldıkları her türlü aksiyon ve etkileşimi farklı raporlama seçenekleriyle sunma özelliği'},
		{ img: 'özel odalar/ozel-odalar.png', icon: 'özel odalar/virtual-environment 1.svg', title: 'Özel Odalar', sub: 'Etkinliklere özel tasarlanmış 3D odalar.' },
		{ img: 'DinamikKişiselleştirilmişmarkalama/dinamik-kisisellestirilmis-markalama.png', icon: 'DinamikKişiselleştirilmişmarkalama/billboard1.svg', title: 'Dinamik Kişiselleştirilmiş Markalama', sub:'Değiştirilebilen reklam alanları ve özelleştirilmiş reklam gösterim olanağı' },
		{ img: 'oyun alanları/oyun-alanlari.png', icon: 'oyun alanları/puzzle-10.svg', title: 'Oyun Alanları', sub: 'Ödül kurgularının planlanabileceği markalama yapılabilecek tekli ya da çoklu oyun seçenekleri.' },
		{ img: 'backpack/backpack.png', icon: 'backpack/multiple-11.svg', title: 'Backpack', sub: 'Kullanıcılara ait bir sırt çantası ile event içinde toplanan dijital materyallerin toplanarak event sonrasında da kişilerin erişimine sunulması.' },
		{ img: 'stand alanları/stand-alanlari.png', icon: 'stand alanları/tripod 1.svg', title: 'Stand Alanları', sub:'Firmalara özel kurguların gerçekleştirilmesi.' },
		{ img: 'anket/anket.png', icon: 'anket/tripod1.svg', title: 'Anket', sub: 'Gerçek zamanlı anketler düzenlenerek, sonuçların istenildiği anda ve kullanıcıları odadan çıkarmadan paylaşılabilmesi.' }
	];

	// totalItems = this.imgs.length;

	constructor(private modals: NgbModal) { this.changeText = false;}

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
		this.isShown1 = !this.isShown1;
		this.clicked = !this.clicked;
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
