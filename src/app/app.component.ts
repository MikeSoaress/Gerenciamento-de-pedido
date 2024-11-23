import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
  title = 'cozinha';
  currentUrl: string = '';

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
      this.router.navigate(['/login']);

    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url; // URL atual
    });
  }
}
