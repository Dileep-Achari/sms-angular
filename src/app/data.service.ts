// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://apk.doctor9.com/meeYdya/api/getGridViewDetails';

  constructor(private http: HttpClient) {}

  fetchGridViewDetails(token: string, umrno: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJIT1NUIjoiTVJSQ0hVQVQiLCJVTVJfTk8iOiJNUlIwMDAxMDQ5IiwiT1JHX0lEIjoxLCJMT0NfSUQiOjEsIk1PQklMRV9OTyI6bnVsbCwiaWF0IjoxNzI4OTAxNDQzfQ.fbcrAZUWgTNhT5H5kKCDYuVBebxOypde4i45M4-AUI0",
      'umrno': "MRR0001049"
    });

    const payload = {
      FROM_DT: "1-Aug-2024",
      TO_DT: "23-Oct-2024",
      PAGENUM: "1",
      PAGE_SIZE: "1000",
      IP_SESSION_ID: 28,
      UMR_NO: "MRR0001049"
    };

    return this.http.post(this.apiUrl, payload, { headers });
  }
}
