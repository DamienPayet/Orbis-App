import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PaginationComponent} from '../pagination/pagination.component';
import {TableListItemRow, TableListItems} from '../../interfaces/table-list-items.interface';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [
    NgbModule,
    MatSortModule,
    PaginationComponent,
    TranslatePipe
  ],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent implements OnInit {
  offcanvasExample: boolean = false;
  toggleExample() {
    this.offcanvasExample = !this.offcanvasExample;
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  @Input({ required: true }) table_list!: TableListItems;

  active = 1;
  page: any = 1;
  totalRows: number = 5;
  totalPage: any = 0;
  allData!: {
    page: number;
    per_page: number;
    pre_page: number | null;
    next_page: number | null;
    total: number;
    total_pages: number;
    data: TableListItemRow[];
  } ;
  boxActive: Boolean = false;

  constructor(private modalService: NgbModal) {
  }
  ngOnInit(): void {
      this.data = this.table_list.TableListItemRows.slice();
      this.totalRows = this.table_list.offset;
      this.allData = this.paginator(this.data, this.page, this.totalRows);
      console.log(this.allData);
      this.totalPage = this.allData.total_pages;
  }

  data: TableListItemRow[] = [];

 /* sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.data = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'employee_id': return compare(a.employee_id, b.employee_id, isAsc);
        case 'userName': return compare(a.userName, b.userName, isAsc);
        case 'userEmail': return compare(a.userEmail, b.userEmail, isAsc);
        case 'number': return compare(a.number, b.number, isAsc);
        case 'gender': return compare(a.gender, b.gender, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }
*/
  pageChange(e: any) {
    this.page = e;
    this.allData = this.paginator(this.data, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
