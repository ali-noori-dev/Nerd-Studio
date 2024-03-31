export interface NavItem {
  title: string;
  icon: JSX.Element;
  href: string;
}

export interface SegmentedItem {
  title: string;
  id: number;
}

export interface Language extends SegmentedItem {
  nativeTitle: string;
}
