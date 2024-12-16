import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainComponent} from './pages/main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }

  private beforeUnloadHandler(e: any) {
    localStorage.removeItem('authenticated');
    sessionStorage.removeItem('isAuthenticated');
  }
}
