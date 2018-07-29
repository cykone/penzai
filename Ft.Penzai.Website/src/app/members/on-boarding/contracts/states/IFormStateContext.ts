import { IFormState } from './IFormState';

export interface IFromStateContext {
    backToPreviousSection(): void;
    nextState(start: IFormState): void;
    finish(): void;
}
