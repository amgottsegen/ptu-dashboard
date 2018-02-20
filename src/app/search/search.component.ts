import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  searchProperty(address: string) {
    address = address.toUpperCase();
    this.propertyService.getPropertiesWithSameOwner(address);
}
}
