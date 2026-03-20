import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}
