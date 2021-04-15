import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  isShown1: boolean = true ;
  isShown2: boolean = false ;
  isShown3: boolean = false ;
  isShown4: boolean = false ;

  constructor() { 

  }

  ngOnInit(): void {
  }

  show1() {
    this.isShown1 = ! this.isShown1;
  } 
  show2() {
    this.isShown2 = ! this.isShown2;
  }
  show3() {
    this.isShown3 = ! this.isShown3;
  }
  show4() {
    this.isShown4 = ! this.isShown4;
  }

}
