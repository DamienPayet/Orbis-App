import { TitleCasePipe } from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Select2, Select2Data} from 'ng-select2-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-select2',
  standalone: true,
  imports: [TitleCasePipe, Select2, FormsModule, ReactiveFormsModule],
  templateUrl: './select2.component.html',
  styleUrl: './select2.component.css'
})
export class Select2Component {
  @Input() items: any = '';
  @Output() valueChange: EventEmitter<string>= new EventEmitter<string>();
  valueSet: any = 'fr';
  ngOnInit() {
    this.items.map((item: any) => {
      if(item.selected ) {
        this.valueSet = item.name;
      }
      this.data.push(
        {
          value: item.name,
          label: item.name,
          data: { name: item.name }

        }
      )
    });
  }

  data: Select2Data = []

  /**
   * Handles the change event and emits the updated value.
   *
   * @param {any} event - The event object containing the updated value.
   * @return {void} This method does not return a value.
   */
  onValueChange(event: any):void {
    this.valueChange.emit(event.value);
  }
}
