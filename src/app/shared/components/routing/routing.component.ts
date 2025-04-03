import {Component} from '@angular/core';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {GuardUserService} from '../../../core/services/guard-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent extends Unsubscribable{
constructor(
  private _guardService : GuardUserService,
  private _router : Router
) {
  super()
  this._guardService.getUserData().subscribe(user => {
    if (user?.isAdmin) this._router.navigate(['/admin']);
    else if (user?.isAgency) this._router.navigate(['/workspace-agency']);
    else if (user?.isContentCreator) this._router.navigate(['/workspace-content-creator']);
    else this._router.navigate(['/login']);
  })
}

}
