import { createReducer, on } from '@ngrx/store';
import * as AccountControlsActions from './account-controls.actions';
import { initialAccountControlsState } from './account-controls.state';

export const accountControlsReducer = createReducer(
  initialAccountControlsState,

  on(AccountControlsActions.showAccountControls, (state) => ({
    ...state,
    isShown: true,
  })),

  on(AccountControlsActions.hideAccountControls, (state) => ({
    ...state,
    isShown: false,
  })),
);
