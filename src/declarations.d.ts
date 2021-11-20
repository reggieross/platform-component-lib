declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png' {
  const content: any;
  export = content;
}
