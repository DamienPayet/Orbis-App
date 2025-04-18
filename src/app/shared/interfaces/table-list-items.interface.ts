export interface TableListItems {
  title: string
  buttonPrimary?: TableListButton
  buttonSecondary?: TableListButton
  buttonTertiary?: TableListButton
  headerItems: TableListHeader[]
  TableListItemRows: TableListItemRow[]
  limit: number
  offset: number
  checkbox: boolean
  pagination: boolean
}

export interface TableListButton {
  text: string
  route: string
  icon: string
}

export interface TableListHeader {
  text: string
  propertyName: string
  sort?: boolean
}

export interface TableListItemRow {
  items: TableListItemElement[]
}

export interface TableListItemElement {
  type : TableListItemElementType
  text?: string
  route?: string
  link?: string
  mask?: string
  icon?: string
  image?: string
  textPrimary?: string
  textSecondary?: string
  badge?: string
}

export enum TableListItemElementType {
  text = 'text',
  link = 'link',
  image = 'image',
  badge = 'badge'
}
