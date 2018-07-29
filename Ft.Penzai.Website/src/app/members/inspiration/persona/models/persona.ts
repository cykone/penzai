export class Persona {
    constructor() {
        this.id = 'sam-narr';
        this.imageSource = './assets/personas/sam.jpg';
        this.title = 'kdfslj';
        this.jobDescription = 'Social Media Expert';
        this.name = 'Sam Narr';
        // tslint:disable-next-line:max-line-length
        this.intro = 'Sam is 28 years old and is a social media specialist working for huge brands in London. He advices them in digital media advertising strategies. Find out what he loves about his job.';
    }

    public id: string;

    public title: string;

    public name: string;

    public jobDescription: string;

    public intro: string;

    public imageSource: string;
}
