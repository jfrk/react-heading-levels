import React, { createContext, useContext } from 'react';

export const HeadingLevelContext = createContext(1);

export const HeadingLevelProvider = ({ children }) => (
  <HeadingLevelContext.Provider value={1}>
    {children}
  </HeadingLevelContext.Provider>
);

export function H({ ...props }) {
  let level = Math.min(6, useContext(HeadingLevelContext));
  let Element = `h${level}`;
  return <Element {...props} />;
}

export const Heading = H;

export function Section({ children }) {
  let level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={level + 1}>
      {children}
    </HeadingLevelContext.Provider>
  );
}
