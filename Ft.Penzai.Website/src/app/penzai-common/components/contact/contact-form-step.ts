import { ContactData } from './contact-data';

export abstract class ContactFormStep {

    constructor(stepId: string, stepNum: number) {

        this.stepNum = stepNum;
        this.id = stepId;
    }

    public id: string;

    public stepNum: number;

    public abstract label: string;

    public abstract hasPrevStep: boolean;

    public abstract confirm(context: IContactContext): void;

    public abstract goBack(context: IContactContext): void;
}

export class StepGetName extends ContactFormStep {

    constructor(stepNum: number) {
        super('name', stepNum);
    }

    public label = 'Firstname & Lastname';

    public hasPrevStep = false;

    public confirm(context: IContactContext): void {
        if (context.contactData.senderName == null) {
            // todo validation
        }

        console.log(context.contactData.senderName);

        context.setCurrentStep(new StepGetEmail(this.stepNum + 1));
    }

    public goBack(context: IContactContext): void {

    }
}

export class StepGetEmail extends ContactFormStep {

    constructor(stepNum: number) {
        super('email', stepNum);
    }

    public label = 'Email';

    public hasPrevStep = true;

    public confirm(context: IContactContext): void {
        context.setCurrentStep(new StepGetSubject(this.stepNum + 1));
    }

    public goBack(context: IContactContext): void {
        context.setCurrentStep(new StepGetName(this.stepNum - 1));
    }
}

export class StepGetSubject extends ContactFormStep {
    constructor(stepNum: number) {
        super('subject', stepNum);
    }

    public label = 'Subject';

    public hasPrevStep = true;

    public confirm(context: IContactContext): void {
        context.setCurrentStep(new StepGetMessage(this.stepNum + 1));
    }

    public goBack(context: IContactContext): void {
        context.setCurrentStep(new StepGetEmail(this.stepNum - 1));
    }
}

export class StepGetMessage extends ContactFormStep {
    constructor(stepNum: number) {
        super('message', stepNum);
    }

    public label = 'Message';

    public hasPrevStep = true;

    public confirm(context: IContactContext): void {
        const success = context.sendEmail();
        context.setCurrentStep(new StepThankYou(this.stepNum + 1));
    }

    public goBack(context: IContactContext): void {
        context.setCurrentStep(new StepGetEmail(this.stepNum - 1));
    }
}

export class StepThankYou extends ContactFormStep {
    constructor(stepNum: number) {
        super('thanks', stepNum);
    }

    public label = 'Your message has been sent. Thank you!';

    public hasPrevStep = true;

    public confirm(context: IContactContext): void {
    }

    public goBack(context: IContactContext): void {
        context.setCurrentStep(new StepGetEmail(this.stepNum - 1));
    }
}

export interface IContactContext {

    contactData: ContactData;

    setCurrentStep(currentStep: ContactFormStep): void;

    sendEmail(): void;
}
