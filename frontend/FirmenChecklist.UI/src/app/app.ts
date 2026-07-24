import { Component, signal } from '@angular/core';
import { FirmaKarte } from './components/firma-karte/firma-karte';

@Component({
  selector: 'app-root',
  imports: [FirmaKarte],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FirmenChecklist.UI');
}
