import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-firma-karte',
  imports: [],
  templateUrl: './firma-karte.html',
  styleUrl: './firma-karte.scss',
})
export class FirmaKarte {
  @Input() company: any;
}
