import { createContext } from 'react';

export interface ConfigConsumerProps {
  rootPrefixCls?: string;
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `view-core-${suffixCls}` : 'view-core';
  },
});

export default ConfigContext;
