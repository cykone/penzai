import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-emails-information',
  templateUrl: './check-emails-information.component.html',
  styleUrls: ['./check-emails-information.component.css']
})
export class CheckEmailsInformationComponent implements OnInit {

  email = '';

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const email = this.activeRoute.snapshot.queryParamMap.get('email');
    if (email) {
      this.email = email;
    }
  }
}
