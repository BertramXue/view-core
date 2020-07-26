import { useEffect, RefObject } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: Function,
): any => {
  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      if (!ref.current || ref.current.contains(evt.target as HTMLElement)) {
        return;
      }
      callback(evt);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, callback]);
};

export default useClickOutside;
