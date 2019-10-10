import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { environment } from '../environments/environment';
import { Feedback } from './app.feedback.class';
import { FeedbackService } from './app.feedback.service';
import { LoggingService } from './logging/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private siteClassBusiness = 'site-business';

  private siteClassCommunity = 'site-community';

  public pathBusiness = '/business';

  public pathCommunity = '/';

  public isPopupActive = false;

  public feedback = new Feedback();

  constructor(private router: Router,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService,
    private loggingService: LoggingService) {
  }

  title = 'app';

  public changeFeedbackPopup(): void {
    this.isPopupActive = !this.isPopupActive;
  }

  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      window.scrollTo(0, 0);

      try {
        if (value instanceof NavigationStart) {
          this.loggingService.log('[router] ' + value.id);
        }

      } catch (err) {
        console.log('error logging');
      }

      // Changes Color schema
      if (value instanceof NavigationEnd) {
        if (value.url.startsWith(this.pathBusiness)) {
          this.renderer.removeClass(document.body, this.siteClassCommunity);
          this.renderer.addClass(document.body, this.siteClassBusiness);
        } else {
          this.renderer.removeClass(document.body, this.siteClassBusiness);
          this.renderer.addClass(document.body, this.siteClassCommunity);
        }
      }
    });
  }

  public onSubmit(): void {
    this.feedbackService.sendFeedback(this.feedback)
      .then((success: boolean) => {
        this.isPopupActive = false;
        this.feedback = new Feedback();
      });
  }
}
