import { Component, inject, OnInit, signal } from '@angular/core';
import { FirmaKarte } from './components/firma-karte/firma-karte';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FirmaKarte],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('FirmenChecklist.UI');
  private http = inject(HttpClient);

  companies = signal<any[]>([]);

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.http.get<any[]>('http://localhost:5281/companies').subscribe({
      next: result => {
        console.log(result);
        this.companies.set(result);
      },
      error: err => {
        console.error('Could not load companies', err);
      }
    });
  }
}
