import { FC } from 'react';
import Menu, { IMenuProps } from './menu';
import MenuItem, { IMenuItemProps } from './menuItem';
import SubMenu, { ISubMenuProps } from './subMenu';

export type MenuComponent = FC<IMenuProps> & {
  Item?: FC<IMenuItemProps>;
  SubMenu?: FC<ISubMenuProps>;
};

const TransMenu = Menu as MenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
