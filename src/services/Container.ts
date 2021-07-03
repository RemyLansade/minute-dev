export class Container {
  private static _map:Map<string, Function> = new Map<string, Function>()

  public static register(key: string, factoryMethod: Function) {
    this._map.set(key, factoryMethod)
  }

  public static resolve<T>(key: string): T | null {
    if(!this._map.has(key)) {
      return null
    }

    const factoryMethod: Function = this._map.get(key) as Function
    return factoryMethod() as T;
  }
}
