export interface TableListItems<T = any> {
  title: string;
  buttonPrimary?: TableListButton;
  buttonSecondary?: TableListButton;
  buttonTertiary?: TableListButton;
  headerItems: TableListHeader[];
  rows: TableListItemRow[];
  limit: number;
  offset: number;
  checkbox: boolean;
  pagination: boolean;
}

export interface TableListItemRow{
  elements: TableListItemElement[];
}

export interface TableListItemElement {
  type: TableListItemElementType;
  key: string;
  value: TableListItemValue;
}

export type TableListItemValue =
  | TableListItemText
  | TableListItemImage
  | TableListItemBadge
  | TableListItemAction;

export enum TableListItemElementType {
  text = 'text',
  link = 'link',
  image = 'image',
  badge = 'badge',
  action = 'action'
}

export interface TableListButton {
  text: string;
  route?: string;
  icon?: string;
  callback?: () => void;
}

export interface TableListHeader {
  text: string;
  key: string;
  sort?: boolean;
}

export interface TableListItemText {
  text: string;
  mask?: string;
}

export interface TableListItemLink {
  text: string;
  mask?: string;
  href: string;
}

export interface TableListItemImage {
  image: string;
  href?: string;
  textPrimary: string;
  textSecondary: string;
}

export interface TableListItemBadge {
  severity: 'success' | 'info' | 'warning' | 'danger';
  text: string;
}

export interface TableListItemAction {
  read?: { label: string; route?: string };
  update?: { label: string; route?: string };
  delete?: { label: string; route?: string };
}
