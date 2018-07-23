import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  name = '';

  constructor(private httpClient: HttpClient) {

  }

  onNameKeyUp(event: any) {

    this.name = event.target.value;

  }

  getProfile() {

    this.httpClient.get(`http://localhost:1337/Actor?nombre=${this.name}`)
      .subscribe(
        (data: any[]) => {

          console.log(data);
        }

      );

  }

}
