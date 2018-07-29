import { IFormState } from '../../contracts/states/IFormState';
import { IFromStateContext } from '../../contracts/states/IFormStateContext';

export class FocusState implements IFormState {

    public name = 'focus';

    public back(ontext: IFromStateContext): void {
        // do nothing
    }

    public handleState(context: IFromStateContext): void {
        context.nextState(new InformationState());
    }
}

export class InformationState implements IFormState {

    public name = 'information';

    public back(context: IFromStateContext): void {
        context.nextState(new FocusState());
    }

    public handleState(context: IFromStateContext): void {
        context.nextState(new DecisionState());
    }
}

export class DecisionState implements IFormState {

    public name = 'decision';

    public back(context: IFromStateContext) {
        context.nextState(new InformationState());
    }

    public handleState(context: IFromStateContext): void {
        context.nextState(new LifeState());
    }
}

export class LifeState implements IFormState {

    public name = 'life';

    public back(context: IFromStateContext): void {
        context.nextState(new DecisionState());
    }

    public handleState(context: IFromStateContext): void {
        context.finish();
    }
}


