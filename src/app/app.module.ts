import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';

import { PropertyService } from './property.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TableComponent,
    SearchComponent
  ],
  imports: [
    AlertModule.forRoot(),
    LeafletModule.forRoot(),
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
