// src/app/components/sms-page/sms-page.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sms-page',
  templateUrl: './sms-page.component.html',
  styleUrls: ['./sms-page.component.css']
})
export class SmsPageComponent implements OnInit {
  smsMessages: string[] = [];
  whatsappMessages: string[] = [];
  showSmsMessages = false;
  showWhatsappMessages = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages(): void {
    const token = localStorage.getItem('token');
    const umrno = 'MRR0001049';

    if (!token) {
      console.error("No auth token found.");
      return;
    }

    this.dataService.fetchGridViewDetails(token, umrno).subscribe(
      response => {
        this.smsMessages = response.data.SMS.map((sms: any) => sms.MOB_MSG_TPL);
        this.whatsappMessages = response.data.WHATSAPP.map((wa: any) => wa.payload.waTemp);
      },
      error => {
        console.error("Error fetching data", error);
      }
    );
  }

  toggleSmsMessages(): void {
    this.showSmsMessages = !this.showSmsMessages;
    this.showWhatsappMessages = false;
  }

  toggleWhatsappMessages(): void {
    this.showWhatsappMessages = !this.showWhatsappMessages;
    this.showSmsMessages = false;
  }
}
