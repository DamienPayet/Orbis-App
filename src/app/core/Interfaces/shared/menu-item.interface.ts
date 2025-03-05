export interface MenuItem {
  label?: string
  title: string;
  icon?: string;
  route?: string;
  badge?: boolean;
  subMenu?: {
    title: string;
    route?: string;
    subBadge?: boolean;
    subsubMenu?: { title: string; route: string; }[]
  }[];
  roles? : string[];
}
