import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HelloWorldBean } from '../shared/class/HelloWorldBean';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message: string = 'some welcome message';
  name!: string;
  name1!: string;
  welcomeMessage!: string;
  welcomeName!: string;

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParameter() {
    this.welcomeDataService
      .executeHelloWorldServiceWithPathVararable(this.name1)
      .subscribe((res:HelloWorldBean) => {
        this.welcomeName!= res.name;
        console.log(this.welcomeName);
      });
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorldService().subscribe(
      (response) => this.handleSuccessfulMessage(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulMessage(response: any) {
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessage = error.error.message;
  }
}
