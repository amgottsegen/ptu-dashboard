import { Component } from '@angular/core';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTU Dashboard';

  constructor(private propertyService: PropertyService) {}
}
