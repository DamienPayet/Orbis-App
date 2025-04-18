import {Component} from '@angular/core';
import {BreadcrumbComponent} from '../../../../../layouts/shared-layout/breadcrumb/breadcrumb.component';
import {TableListComponent} from '../../../../../shared/components/table-list/table-list.component';
import {
  TableListItemElementType,
  TableListItemRow,
  TableListItems
} from '../../../../../shared/interfaces/table-list-items.interface';

@Component({
  selector: 'app-agency-employees-management',
  imports: [
    BreadcrumbComponent,
    TableListComponent,
  ],
  templateUrl: './agency-employees-management.component.html',
  styleUrl: './agency-employees-management.component.scss'
})
export class AgencyEmployeesManagementComponent {
  breadcrumbList = {
    title: 'Employee',
    breadcrumb_path: 'Home',
    currentURL: 'employee',
  }

  items: TableListItems = {
    title: 'Employees',
    checkbox: true,
    pagination: true,
    offset: 10,
    limit: 10,

    buttonPrimary: {
      text: 'Add Employee',
      icon: 'fa fa-plus',
      route: '/agency/employees/create'
    },
    buttonSecondary: {
      text: 'Invite Employee',
      icon: 'fa fa-envelope',
      route: '/agency/employees/create'
    },

    headerItems: [
      {text: 'Photo', key: 'photo'},
      {text: 'Full Name', key: 'name'},
      {text: 'Email', key: 'email'},
      {text: 'Status', key: 'status'},
      {text: 'Actions', key: 'actions'}
    ],

    rows: [
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View'},
              update: {label: 'Edit'},
              delete: {label: 'Delete'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      },
      {
        elements: [
          {
            key: 'photo',
            type: TableListItemElementType.image,
            value: {
              image: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
              textPrimary: 'Ricky Nelson',
              textSecondary: 'Software Engineer',
              href: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
            }
          },
          {
            key: 'name',
            type: TableListItemElementType.text,
            value: {
              text: 'Ricky Nelson'
            }
          },
          {
            key: 'email',
            type: TableListItemElementType.text,
            value: {
              text: 'ricky.nelson@orbis.io'
            }
          },
          {
            key: 'status',
            type: TableListItemElementType.badge,
            value: {
              text: 'Active',
              severity: 'success'
            }
          },
          {
            key: 'actions',
            type: TableListItemElementType.action,
            value: {
              read: {label: 'View', route: '/agency/employees/view/1001'},
              update: {label: 'Edit', route: '/agency/employees/edit/1001'},
              delete: {label: 'Delete', route: '/agency/employees/delete/1001'}
            }
          }
        ]
      }
    ]
  };
  handleTableAction(event: { action: 'read' | 'update' | 'delete', row: TableListItemRow }) {
    console.log('Action triggered:', event.action, event.row);
    // Ouvre un modal, appelle une API, etc.
  }
}
