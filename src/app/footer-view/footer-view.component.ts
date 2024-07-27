import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-view',
  standalone: true,
  imports: [],
  templateUrl: './footer-view.component.html',
  styleUrl: './footer-view.component.scss'
})
export class FooterViewComponent {

  readonly year = new Date().getFullYear();
  readonly name = '6thLA';

  constructor() {}
}
