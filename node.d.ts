export {}
declare global {
  namespace NodeJS {
    interface ProcessENV {
      [key: string]: string
    }
  }
}
