import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-penzai-logo',
  templateUrl: './penzai-logo.component.html',
  styleUrls: ['./penzai-logo.component.css']
})
export class PenzaiLogoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public subpage = 'community';

  public pathBusiness = 'business';

  public pathCommunity = 'community';

  ngOnInit() {
    this.route.url.subscribe((url) => {
      if (url.length === 0) {
        this.subpage = this.pathCommunity;
        return;
      }

      const subPath = url[0].toString();
      if (subPath === this.pathBusiness) {
        this.subpage = this.pathBusiness;
      } else {
        this.subpage = this.pathCommunity;
      }
    });
  }
}
