/// <reference types="vite/client" />

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.JPEG' {
  const value: string
  export default value
}
