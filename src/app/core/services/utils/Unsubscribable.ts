import {Injectable, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class Unsubscribable implements OnDestroy {
  protected destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
