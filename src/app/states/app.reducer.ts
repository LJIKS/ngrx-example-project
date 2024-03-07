import { createReducer, on } from '@ngrx/store';
import { appActions } from './app.actions';
import { initialState } from './app.state';

export const appReducer = createReducer(
  initialState,
  on(appActions.setIsEnabled,
    (state,{isEnabled}) => (
      {
        ...state,
        isEnabled,
      }
    ),
  ),
);
