import { IEventBus, IEventObject, ISubscribe } from "../types";

class EventBus implements IEventBus {
  private _eventObject: IEventObject;
  private _callbackId: number;
  
  constructor() {
    this._eventObject = {};
    this._callbackId = 0;
  }

  dispatch<T extends any[]>(eventName: string, ...args: T): void {
    const callbackObject = this._eventObject[eventName];

    if (!callbackObject) return console.warn(eventName + " not found!");

    for (let id in callbackObject) {
      callbackObject[id](...args);

      if (id[0] === "d") {
        delete callbackObject[id];
      }
    }
  }

  on(eventName: string, callback: Function): ISubscribe {
    if (!this._eventObject[eventName]) {
      this._eventObject[eventName] = {};
    }

    const id = this._callbackId++;

    this._eventObject[eventName][id] = callback;

    const unSubscribe = () => {
      delete this._eventObject[eventName][id];

      if (Object.keys(this._eventObject[eventName]).length === 0) {
        delete this._eventObject[eventName];
      }
    };

    return { unSubscribe };
  }

  off(eventName: string): void {
    if (!eventName) {
      this._eventObject = {};
      return;
    }

    delete this._eventObject[eventName];
  }
}

export const eventBus = new EventBus();
