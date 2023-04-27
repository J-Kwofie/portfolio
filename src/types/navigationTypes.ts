import { FunctionComponent } from 'react';

export interface LinkItem {
  link: string;
  text: string;
  key: number;
  icon: string;
  id: string;
}

interface NavItemProps {
  linkItem: LinkItem;
}

export type NavItemListType = {
  items: LinkItem[];
  resourceName: string;
  navItemComponent: FunctionComponent<NavItemProps>;
};
