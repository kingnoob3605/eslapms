import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../store/auth/auth.selector';
import { map } from 'rxjs';

export const unauthGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectIsAuthenticated).pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigateByUrl('/role');
        return false;
      }
      return true;
    }),
  );
};
