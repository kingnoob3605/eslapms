import { createAction } from '@ngrx/store';

export const showAccountControls = createAction(
  '[AccountControls] show account controls',
);

export const hideAccountControls = createAction(
  '[AccountControls] hide account controls',
);
