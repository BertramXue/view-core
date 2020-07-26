export const warning = (
  valid: boolean,
  component: string,
  message: string,
): void => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.error(`Warning: [view-core: ${component} component ${message}]`);
  }
};

export const note = (
  valid: boolean,
  component: string,
  message: string,
): void => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.warn(`Note: [view-core: ${component} component ${message}]`);
  }
};
