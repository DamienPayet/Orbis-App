import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-error400',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './error400.component.html',
  styleUrl: './error400.component.css'
})
export class Error400Component {

}
