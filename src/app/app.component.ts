import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DescriptionViewComponent } from "./description-view/description-view.component";
import { FooterViewComponent } from "./footer-view/footer-view.component";
import { DivisionViewComponent } from "./division-view/division-view.component";
import { MediaViewComponent } from "./media-view/media-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    DescriptionViewComponent,
    FooterViewComponent,
    DivisionViewComponent,
    MediaViewComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iicorps';
}
