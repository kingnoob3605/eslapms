import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../store/auth/auth.selector';
import { map } from 'rxjs';

export const noroleGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectAuthUser).pipe(
    map((user) => {
      if (!user) return true;

      return !user.roles.find((role) => role.is_active);
    }),
  );
};
