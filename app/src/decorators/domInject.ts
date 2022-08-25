export function domInject(id: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement
    const getter = function () {
      if (!elemento) {
        elemento = document.querySelector(id) as HTMLElement
      }
      return elemento
    }
    Object.defineProperty(
      target,
      propertyKey,
      { get: getter })
  }
}