import React, {
  FC,
  useContext,
  useState,
  createContext,
  useEffect,
  useRef
} from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../_util';
import Input, { IInputProps } from '../Input/input';
import AutoCompleteList from './autoCompleteList';
import Icon from '../Icon';
import { useDebounce, useClickOutside } from '../hooks';

interface DataSource {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSource;

export interface IAutoCompleteProps extends Omit<IInputProps, 'onSelect'> {
  onSearch: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (selectItem: DataSourceType, index?: number) => void;
  renderOption?: (selectItem: DataSourceType) => React.ReactElement;
}

export interface IAutoCompleteContext {
  onSelect?: (selectItem: DataSourceType, index?: number) => void;
  selectedIndex: number;
}

export const AutoCompleteContext = createContext<IAutoCompleteContext>({
  selectedIndex: -1
});

const AutoComplete: FC<IAutoCompleteProps> = props => {
  const { onSearch, onSelect, value, renderOption, ...restProps } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('auto-complete');
  const classes = classnames(prefixCls);
  const [keyword, setKeyword] = useState(value as string);
  const [searchResults, setSearchResults] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const debounceValue = useDebounce(keyword);
  const isSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  useClickOutside(componentRef, () => {
    setSearchResults([]);
  });
  useEffect(() => {
    if (debounceValue && isSearch.current) {
      const resultArr = onSearch && onSearch(debounceValue);
      if (resultArr instanceof Promise) {
        setLoading(true);
        resultArr.then(data => {
          setLoading(false);
          setSearchResults(data);
        });
      } else {
        setSearchResults(resultArr || []);
      }
    } else {
      setSearchResults([]);
    }
    setSelectedIndex(-1);
  }, [debounceValue]);
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.trim();
    setKeyword(value);
    isSearch.current = true;
  };
  const handleSelect = (selectItem: DataSourceType, index?: number) => {
    setKeyword(selectItem.value);
    setSearchResults([]);
    onSelect && onSelect(selectItem, index);
    isSearch.current = false;
  };
  const highligh = (index: number) => {
    if (index <= 0) {
      index = 0;
    }
    if (index >= searchResults.length) {
      index = searchResults.length - 1;
    }
    setSelectedIndex(index);
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = evt.keyCode;
    switch (keyCode) {
      case 13:
        searchResults[selectedIndex] &&
          handleSelect(searchResults[selectedIndex]);
        break;
      case 38:
        highligh(selectedIndex - 1);
        break;
      case 40:
        highligh(selectedIndex + 1);
        break;
      case 27:
        setSearchResults([]);
        break;
      default:
        break;
    }
  };
  const passContext: IAutoCompleteContext = {
    onSelect: handleSelect,
    selectedIndex
  };
  return (
    <div className={classes} ref={componentRef}>
      <Input
        value={keyword}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {loading && (
        <div className={`${prefixCls}-loading`}>
          <Icon icon="spinner" spin />
        </div>
      )}
      {searchResults.length > 0 && (
        <AutoCompleteContext.Provider value={passContext}>
          <AutoCompleteList
            autoCompleteList={searchResults}
            renderOption={renderOption}
          />
        </AutoCompleteContext.Provider>
      )}
    </div>
  );
};

AutoComplete.displayName = 'AutoComplete';
AutoComplete.defaultProps = {
  value: ''
};
export default AutoComplete;
