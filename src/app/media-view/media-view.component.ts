import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-media-view',
  standalone: true,
  imports: [
    NgbCarouselModule
  ],
  templateUrl: './media-view.component.html',
  styleUrl: './media-view.component.scss'
})
export class MediaViewComponent {
  imgs = [
    "assets/picture/image1.jpg",
    "assets/picture/image2.jpg",
    "assets/picture/image3.jpg",
    "assets/picture/image4.jpg",
    "assets/picture/image5.jpg",
  ]
}
