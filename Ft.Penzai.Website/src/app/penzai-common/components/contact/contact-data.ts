export class ContactData {
    public senderName: string;

    public senderEmail: string;

    public subject: string;

    public message: string;

    public toString(): string {
        return '[senderName] = ' + '\'' + this.senderName + '\''
            + '[senderEmail] = ' + '\'' + this.senderEmail + '\''
            + '[subject] = ' + '\'' + this.subject + '\''
            + '[message] = ' + '\'' + this.message + '\'';
    }
}
