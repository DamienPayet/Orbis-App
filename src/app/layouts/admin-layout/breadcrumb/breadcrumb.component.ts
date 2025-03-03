import { Component, Input } from '@angular/core';

interface Breadcrumb {
  title?: string;
  subTitle?: string;
  breadcrumb_path?: string;
  currentURL?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  @Input() breadcrumb: Breadcrumb = {};
  @Input() style2?: boolean = false;

  title: string = 'Dashboard';
  subTitle: string = 'Your business dashboard template';
  currentURL?: string = '';
  breadcrumb_path?: string = '';

  ngOnInit() {
    this.title = this.breadcrumb.title || this.title;
    this.subTitle = this.breadcrumb.subTitle || this.subTitle;
    this.breadcrumb_path = this.breadcrumb.breadcrumb_path;
    this.currentURL = this.breadcrumb.currentURL;
  }

  offcanvasExample: boolean = false;
  toggleExample() {
    this.offcanvasExample = !this.offcanvasExample;
  }

}
