import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {DatatablesModelResponse} from '../../../_model/datatables';
import {Color} from '../../../entity/color.model';
import {Observable} from 'rxjs';

@Injectable()
export class ColorService {

  constructor(private _http: HttpClient) {
  }

  public datatables(value: Color, datatablesParameters: any) {
    let params = new HttpParams();
    params = params.append('start', datatablesParameters.start);
    params = params.append('length', datatablesParameters.length);
    params = params.append('draw', datatablesParameters.draw);
    params = params.append('order[0][column]', datatablesParameters.order[0]['column']);
    params = params.append('order[0][dir]', datatablesParameters.order[0]['dir']);

    return this._http
      .post<DatatablesModelResponse>(
        `${environment.supportDeviceApi}/master/color-device/datatables`,
        value, {params: params}
      );
  }

  public list(): Observable<Color[]> {
    return this._http.get<Color[]>(`${environment.supportDeviceApi}/master/color-device/lists`);
  }

  public save(value: Color) {
    return this._http.post(`${environment.supportDeviceApi}/master/color-device/`, value);
  }

  public update(value: Color) {
    return this._http.put(`${environment.supportDeviceApi}/master/color-device/`, value);
  }


  public getChangeTypes(id: number) {
    return this._http.get(`${environment.supportDeviceApi}/master/color-device/${id}`, {observe: 'response'});
  }

  public remove(id: number) {
    return this._http.delete(`${environment.supportDeviceApi}/master/color-device/${id}`, {observe: 'response'});
  }
}
