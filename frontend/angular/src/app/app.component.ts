import { Component } from '@angular/core';
import {PostService} from "./services/post.service";
import {ActivatedRoute} from "@angular/router";
import {NgxNotificationService} from "ngx-notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Angular 11 with Spring Boot 2.x';

  constructor(private ngxNotificationService: NgxNotificationService) {}

  searchPosts($event: any) {
    if ($event.keyCode === 13) {
      $event.preventDefault();
      $event.target.parentElement.submit();
    }
  }

}
