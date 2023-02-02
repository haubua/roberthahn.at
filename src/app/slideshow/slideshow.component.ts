import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  images = ['compass-7592447_1920.jpg', 'golden-eagle-7555959_1920.jpg', 'ocean-7736669_1920.jpg'];
  headlines = ['Go your own way!', 'Be free like a eagle!', 'Discover this beautiful world!'];

  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.slideshow();
  }

  slideshow() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true
      }, 1)
    }, 8000);
  }
}


