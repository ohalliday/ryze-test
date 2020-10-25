import { Component } from "@angular/core";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "hero-page";
  facebook = faFacebookF;
  instagram = faInstagram;
  linkedIn = faLinkedinIn;
  emailSubmitted = false;

  links = [
    "Ethos & Values",
    "Who we help",
    "How do we do it",
    "Why it works",
    "Get in touch",
  ];

  submitForm(email: string) {
    console.log("Email Submitted!", email);
    this.emailSubmitted = true;
  }
}
