interface IGenerateTestId {
  (suffixTestId: string): string;
}

/**
 * generate testid for jest to unit test
 * @param suffixTestId
 */
const generateTestId: IGenerateTestId = suffixTestId => {
  return `view-core-${suffixTestId}`;
};

export default generateTestId;
