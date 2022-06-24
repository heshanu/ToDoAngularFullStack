import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorldBean } from 'src/app/shared/class/HelloWorldBean';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/helloworld/hello-world-beam'
    );
  }

  executeHelloWorldServiceWithPathVararable(welcomeName:any) {
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/helloworld/hello-world/path-variable/${welcomeName}`
    );
  }
}
