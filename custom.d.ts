declare module '*.svg' {
  import * as React from 'react';
  
  const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  
  export default ReactComponent;
}

declare module '*.module.css';

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
