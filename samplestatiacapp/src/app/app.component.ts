import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = "";
  public result: string = ""

  constructor(private http: HttpClient) {

  }

  public keyup() {
    this.http.get('/api/HttpTrigger1?name=' + this.name, { responseType: 'text' }).subscribe(resp => {
      this.result = resp
    })
  }
}
