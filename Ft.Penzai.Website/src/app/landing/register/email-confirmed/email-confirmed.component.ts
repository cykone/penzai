import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../penzai-common/account/account.service';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrls: ['./email-confirmed.component.css']
})
export class EmailConfirmedComponent implements OnInit {

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    const userId = this.route.snapshot.queryParamMap.get('userId');
    const token = this.route.snapshot.queryParamMap.get('token');

    this.accountService.confirmEmail(userId, token).subscribe(_ => {
      console.log('confirmed');
    });
  }
}
