import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  constructor(private router: Router) {}

  navigateTemplate() {
    this.router.navigate(['/templates'])
  }

}
