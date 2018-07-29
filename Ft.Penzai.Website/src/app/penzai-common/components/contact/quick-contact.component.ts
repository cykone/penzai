import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactFormStep, IContactContext, StepGetName, StepGetEmail } from './contact-form-step';
import { ContactData } from './contact-data';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-quick-contact',
  templateUrl: './quick-contact.component.html',
  styleUrls: ['./quick-contact.component.css']
})
export class QuickContactComponent implements OnInit, IContactContext {

  public currentStep: ContactFormStep;

  public contactData: ContactData;

  private inputNameField: ElementRef;

  @ViewChild('nameElement')
  public set inputName(el: ElementRef) {
    this.inputNameField = el;

    if (this.inputNameField) {
      this.inputNameField.nativeElement.focus();
    }
  }

  private inputEmailField: ElementRef;
  @ViewChild('emailElement')
  public set inputEmail(el: ElementRef) {
    this.inputEmailField = el;

    if (this.inputEmailField) {
      this.inputEmailField.nativeElement.focus();
    }
  }

  private inputSubjectField: ElementRef;
  @ViewChild('subjectElement')
  public set inputSubject(el: ElementRef) {
    this.inputSubjectField = el;

    if (this.inputSubjectField) {
      this.inputSubjectField.nativeElement.focus();
    }
  }

  private inputMessageField: ElementRef;
  @ViewChild('messageElement')
  public set inputMessage(el: ElementRef) {
    this.inputMessageField = el;

    if (this.inputMessageField) {
      this.inputMessageField.nativeElement.focus();
    }
  }

  constructor(private contactService: ContactService) {
    this.contactData = new ContactData();
    this.currentStep = new StepGetName(1);
  }

  ngOnInit() {
  }

  public nextStep(): void {
    this.currentStep.confirm(this);
  }

  public prevStep(): void {
    this.currentStep.goBack(this);
  }

  public cancel(): void {
    this.contactData = new ContactData();
    this.setCurrentStep(new StepGetName(1));
  }

  public setCurrentStep(currentStep: ContactFormStep): void {
    this.currentStep = currentStep;
  }

  public sendEmail() {
    this.contactService.sendEmail(this.contactData).subscribe(_ => {
      console.log('return from send');
    }, err => {
      console.log(err);
    });
  }
}
