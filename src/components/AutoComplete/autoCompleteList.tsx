import React, { FC, useContext } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../_util';
import { AutoCompleteContext, DataSourceType } from './autoComplete';

export interface IAutoCompleteListProps {
  autoCompleteList: DataSourceType[];
  renderOption?: (selectItem: DataSourceType) => React.ReactElement;
}

const AutoCompleteList: FC<IAutoCompleteListProps> = props => {
  const { autoCompleteList, renderOption } = props;
  const context = useContext(AutoCompleteContext);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('auto-complete-list');
  const classes = classnames(prefixCls);
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const handleClick = (selectItem: DataSourceType, index: number) => {
    context.onSelect && context.onSelect(selectItem, index);
  };
  return (
    <ul className={classes}>
      {autoCompleteList.map((item, index) => {
        const itemCls = classnames(`${prefixCls}-item`, {
          [`${prefixCls}-item-selected`]: context.selectedIndex === index
        });
        return (
          <li
            key={index}
            className={itemCls}
            onClick={() => handleClick(item, index)}
          >
            {renderTemplate(item)}
          </li>
        );
      })}
    </ul>
  );
};

AutoCompleteList.displayName = 'AutoCompleteList';
AutoCompleteList.defaultProps = {
  autoCompleteList: []
};
export default AutoCompleteList;
