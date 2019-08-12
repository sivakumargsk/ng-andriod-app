import { Component, OnInit } from '@angular/core';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-andriod-app';

  ngOnInit() {
    document.addEventListener(
      'deviceready',
      () => {
        alert(device.platform);
      },
      false
    );
  }
}
