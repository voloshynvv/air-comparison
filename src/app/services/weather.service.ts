import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private http: HttpClient) {}

    getGeocoding(location: string, limit = 5) {
        return this.http.get(
            `${environment.apiBaseUrl}/geo/1.0/direct?q=${location}&limit=${limit}&appid=${environment.apiKey}`
        );
    }
}
