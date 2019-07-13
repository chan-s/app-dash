import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conexion } from '..//model/variables';
import { ReporteVentas, Reporte } from '../model/modelos';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private _http: HttpClient) { }

  public getTopVentas(reporte: Reporte){
    return this._http.post(`${conexion}top/`, reporte);
  }
  
  public postVentas(model: ReporteVentas){
    return this._http.post(`${conexion}ventas`, model);
  }
}
