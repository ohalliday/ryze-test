import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "hero-page";

  links = [
    "Ethos & Values",
    "Who we help",
    "How do we do it",
    "Why it works",
    "Get in touch",
  ];
}
