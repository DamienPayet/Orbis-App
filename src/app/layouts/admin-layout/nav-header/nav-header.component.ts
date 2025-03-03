import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {

  toggleVal: boolean = false; // Use boolean instead of any
  elementValue: string | null = null; // Use a more specific type
  sidebarStyle: string = '';
  localData: string | null = null; // Use a more specific type

  @Output() sidebarToggle = new EventEmitter<{ toggleVal: boolean }>();
  @Output() emailOpne = new EventEmitter<{ emailval: boolean }>();

  ngOnInit() {
    this.localData = localStorage.getItem('data-sidebar-style');
    if (this.localData) {
      document.body.setAttribute('data-sidebar-style', this.localData);
    }
    this.onResize({ target: { innerWidth: window.innerWidth } } as unknown as UIEvent);
  }

  toggleSidebar() {
    this.toggleVal = !this.toggleVal;
    this.sidebarToggle.emit({ toggleVal: this.toggleVal });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) { // Use UIEvent for better type safety
    this.localData = localStorage.getItem('data-sidebar-style');
    this.elementValue = document.body.getAttribute('data-sidebar-style');
    const width = (event.target as Window).innerWidth;
    
    if (width < 1200 && width > 768) {
      this.toggleVal = true;
      this.sidebarStyle = 'mini';
    } else if (width <= 768) {
      this.toggleVal = false;
      this.sidebarStyle = 'overlay';
    } else {
      this.toggleVal = false;
      this.sidebarStyle = this.localData ?? 'full'; // Use nullish coalescing
    }
    
    this.sidebarToggle.emit({ toggleVal: this.toggleVal });
    document.body.setAttribute('data-sidebar-style', this.sidebarStyle);
  }
}
