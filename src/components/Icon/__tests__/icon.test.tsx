import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon, { IIconProps } from '../icon';
import { generateTestId } from '../../_util';

const testIconProps: IIconProps = {
  theme: 'danger',
  icon: 'arrow-down',
};

const testIconPrefixClsProps: IIconProps = {
  prefixCls: 'jest-test',
  theme: 'danger',
  icon: 'arrow-down',
};

const generateIcon = (props: IIconProps) => {
  return <Icon {...props}></Icon>;
};
describe('Icon component unit test', () => {
  it('Icon component should render in the document', () => {
    const wrapper = render(generateIcon(testIconProps));
    const element = wrapper.getByTestId(generateTestId('icon'));
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('view-core-icon-danger');
  });

  it('Icon component should render in the document', () => {
    const wrapper = render(generateIcon(testIconPrefixClsProps));
    const element = wrapper.getByTestId(generateTestId('icon'));
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('jest-test-danger');
  });
});
