import React, {
  FC,
  useContext,
  useState,
  Children,
  FunctionComponentElement,
} from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
import { IMenuItemProps } from './menuItem';
import { ConfigContext, warning } from '../_util';

export interface ISubMenuProps {
  title: string;
  index: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const SubMenu: FC<ISubMenuProps> = props => {
  const { title, index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);
  const defaultOpenSubmenu = context.defaultOpenSubMenus as string[];
  const openFlag =
    index && context.mode === 'vertical'
      ? defaultOpenSubmenu.includes(index)
      : false;
  const [submenuOpenFlag, setSubmenuOpenFlag] = useState(openFlag);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu-submenu');
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-active`]: context.index && context.index.includes(index),
  });

  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setSubmenuOpenFlag(!submenuOpenFlag);
  };
  let timer: any;
  const handleMouseEvent = (evt: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSubmenuOpenFlag(toggle);
    }, 300);
  };

  const modeClickEvent =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const modeMouseEvent =
    context.mode === 'horizontal'
      ? {
          onMouseEnter: (evt: React.MouseEvent) => {
            handleMouseEvent(evt, true);
          },
          onMouseLeave: (evt: React.MouseEvent) => {
            handleMouseEvent(evt, false);
          },
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classnames(`${prefixCls}-item`, {
      [`${prefixCls}-open`]: submenuOpenFlag,
    });
    const childCompoent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        warning(false, 'SubMenu', 'its children component must be a MenuItem');
        return null;
      }
    });
    return <ul className={subMenuClasses}>{childCompoent}</ul>;
  };

  return (
    <li className={classes} style={style} {...modeMouseEvent}>
      <div className={`${prefixCls}-title`} {...modeClickEvent}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
