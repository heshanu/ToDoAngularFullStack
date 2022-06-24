import { Component, OnInit } from '@angular/core';
import { HardcodededAuthService } from '../service/hardcodeded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isUserLoggedIn!: boolean;
  constructor(public hardcodededAuthService: HardcodededAuthService) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodededAuthService.isUserLoggedIn();
  }
}
