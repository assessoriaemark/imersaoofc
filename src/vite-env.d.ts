/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: any) => void;
  }
}
