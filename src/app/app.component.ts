import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedEvent = 'home';
  onNavigate(feature: string) {
    this.loadedEvent = feature;
  }
}
