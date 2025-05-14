import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../store/auth/auth.selector';
import { filter, map } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const expectedRoles = route.data['roles'] as string[];
  const router = inject(Router);

  return store.select(selectAuthUser).pipe(
    filter((user) => !!user),
    map((user) => {
      const activeRole = user.roles.find((role) => role.is_active);

      if (!activeRole) {
        router.navigateByUrl(`/role`);
        return false;
      }

      if (!expectedRoles.includes(activeRole.name)) {
        router.navigateByUrl(`/${activeRole.name}`);
        return false;
      }

      return expectedRoles.includes(activeRole.name);
    }),
  );
};
