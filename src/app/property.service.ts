import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

interface Coordinates {
  latitude:number;
  longitude:number;
}

interface PropertyData {
  address:string;
  evictions:number;
  predictedEvictions:number;
  codeViolations:number;
  permits:number;
  coords:Coordinates;
}

@Injectable()
export class PropertyService {
  private data = new Subject<any>();
  data$ = this.data.asObservable();

  constructor(private http: HttpClient) { }

  getPropertiesWithSameOwner(address: string) {
    var url = "http://hal17.andrew.cmu.edu/PTU/tmp.json";
    this.http.get<PropertyData>(url).subscribe(
      resp => {
        this.data.next(resp);
      }
    );
  }

}
