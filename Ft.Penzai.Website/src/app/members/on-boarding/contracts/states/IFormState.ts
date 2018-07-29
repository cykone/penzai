import { IFromStateContext } from './IFormStateContext';

export interface IFormState {

    name: string;

    back(context: IFromStateContext): void;

    handleState(context: IFromStateContext): void;
}
