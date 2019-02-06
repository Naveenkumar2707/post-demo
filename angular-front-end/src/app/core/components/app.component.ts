import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Angular Website";

  constructor(private el: ElementRef) {}
}
