import { createActionGroup, props } from '@ngrx/store';

export const appActions = createActionGroup({
  source: 'app',
  events: {
    'Set Is Enabled': props<{isEnabled: boolean}>(),
  },
});
