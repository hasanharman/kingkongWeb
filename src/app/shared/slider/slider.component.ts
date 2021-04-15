import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  activeImg: number = 0;
  // imgs: Array<string> = ['card1.png','card2.png','card3.png','card4.png'];

  imgs = [
    { img:'card1.png',icon: 'cup.svg', title: 'Kongre / Konferans', sub: '' },
    { img:'card2.png',icon: 'chat.svg', title: 'Dönem Toplantıları', sub: 'Bu detaylar ve ihtiyaçlar doğrultusunda size özel bir paket ve bütçe hazırlar' },
    { img:'card3.png',icon: 'present.svg', title: 'Sergi / Fuar', sub: '' },
    { img:'card4.png',icon: 'id.svg', title: 'Toplantı ve Motivasyon Etkinlikler', sub: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  prev(index: number){
    TweenMax.to(`.card-img"-${this.activeImg}`, 0.5, {
      css: {
        opacity: 0,
      },
    });
    TweenMax.to(`.card-img"-${index}`, 0.5, {
      css: {
        opacity: 1,
      },
    });
    this.activeImg = index;
  }

  

}
