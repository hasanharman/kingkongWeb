import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Section2Component } from './shared/section2/section2.component';
import { Section3Component } from './shared/section3/section3.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HowitworksComponent } from './shared/howitworks/howitworks.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    Section2Component,
    Section3Component,
    SliderComponent,
    HowitworksComponent,
    GalleryComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
