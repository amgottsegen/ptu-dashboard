import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private propertyService: PropertyService) {
    this.source = new LocalDataSource();
    propertyService.data$.subscribe(
      data => {
        console.log("change registered in table component");
        this.source.load(data);
      }
    );
   }

  ngOnInit() {
    //nothing
  }
  source: LocalDataSource;
  settings = {
    columns: {
      address: {
        title: 'Address'
      },
      evictions: {
        title: 'Evictions'
      },
      predicted: {
        title: 'Predicted Evictions 2018'
      },
      violations: {
        title: 'Code Violations'
      },
       permits: {
        title: 'Permits'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    hideSubHeader: true
  };
}
