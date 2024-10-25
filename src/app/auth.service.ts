import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://apk.doctor9.com/doctor/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'deviceid': 'postman'
    });

    const payload = {
      "USER_NAME": username,
      "PASSWORD": password
    };

    return this.http.post<any>(this.authUrl, payload, { headers });
  }
}
