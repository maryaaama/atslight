// src/global.d.ts
declare module 'use-debounce' {
    export function useDebounce<T>(value: T, delay: number, options?: { leading?: boolean }): [T];
  }
  