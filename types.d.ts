declare module '*.png' {
  const value: string;
  export default value;
}

declare module '@env' {
  export const BASE_URL_API: string;
}
