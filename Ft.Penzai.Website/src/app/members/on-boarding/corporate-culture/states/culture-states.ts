import { IFormState } from '../../contracts/states/IFormState';
import { IFromStateContext } from '../../contracts/states/IFormStateContext';

export class ChangeState implements IFormState {

    public name = 'change';

    public back(context: IFromStateContext): void {
        context.backToPreviousSection();
    }

    public handleState(context: IFromStateContext): void {
        context.nextState(new InteractionState());
    }
}

export class InteractionState implements IFormState {

    public name = 'interaction';

    public back(context: IFromStateContext): void {
        context.nextState(new ChangeState());
    }

    public handleState(context: IFromStateContext): void {
        context.finish();
    }
}
