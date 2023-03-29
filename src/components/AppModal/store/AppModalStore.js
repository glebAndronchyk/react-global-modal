import { makeAutoObservable } from "mobx";

class AppModalStore {
  isOpened = false;
  renderComponent = null;
  configuration = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  open({ component, configuration }) {
    this._setRenderComponent(component);
    this._setConfiguration(configuration);
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
    this._clear();
  }

  _clear() {
    this.configuration = null;
    this.renderComponent = null;
  }

  _setRenderComponent(component) {
    this.renderComponent = component;
  }

  _setConfiguration(configuration) {
    this.configuration = configuration;
  }
}

const appModalStore = new AppModalStore();

export { appModalStore, AppModalStore };
