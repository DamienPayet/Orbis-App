import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() page = 0;                // The current page number
  @Input() totalPage = 0;           // The total number of pages
  @Output() newPage = new EventEmitter<number>();  // Event emitter to notify the parent component about the page change

  ngOnInit(): void {
    // console.log('Child Component-', this.totalPage);
  }

  pageChange(item: number) {
    this.page = item;
    this.newPage.emit(item);
  }

  counter(i: number) {
    return new Array(i);
  }

  trackByFn(index: number, item: any): any {
    return index; // or return a unique identifier for the item
  }
}
