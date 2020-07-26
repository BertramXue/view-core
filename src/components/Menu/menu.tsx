import React, {
  FC,
  useState,
  useContext,
  createContext,
  Children,
  FunctionComponentElement,
} from 'react';
import classnames from 'classnames';
import { ConfigContext, generateTestId, warning } from '../_util';
import { IMenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

export interface IMenuProps {
  activeIndex?: string;
  className?: string;
  prefixCls?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  index?: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: FC<IMenuProps> = props => {
  const {
    activeIndex,
    className,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubMenus,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu');
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-vertical`]: mode === 'vertical',
    [`${prefixCls}-horizontal`]: mode === 'horizontal',
  });
  const [currentActive, setActiveIndex] = useState(activeIndex);
  const handleClick = (activeIndex: string) => {
    setActiveIndex(activeIndex);
    if (onSelect) {
      onSelect(activeIndex);
    }
  };
  const passContext: IMenuContext = {
    index: currentActive,
    mode,
    defaultOpenSubMenus,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: `${index}` });
      } else {
        warning(false, 'Menu', 'its children must be a MenuItem');
        return null;
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid={generateTestId('menu')}>
      <MenuContext.Provider value={passContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.displayName = 'Menu';
Menu.defaultProps = {
  activeIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};
export default Menu;
