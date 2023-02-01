import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
images = ['compass-7592447_1920.jpg', 'golden-eagle-7555959_1920.jpg', 'ocean-7736669_1920.jpg'];
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
    } ,8000);
  }
}
