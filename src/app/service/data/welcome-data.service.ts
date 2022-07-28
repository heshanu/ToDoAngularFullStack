import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  executeHelloWorldServiceWithPathVararable(welcomeName: any) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/helloworld/hello-world/path-variable/${welcomeName}`,
      { headers: headers }
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user';
    let password = 'user';
    let basicAuthHeaderString =
      'Basic' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
