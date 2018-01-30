import { Element } from '@polymer/polymer/polymer-element.js';

export const html = (strings, ...values) => strings[0]
  + values.map((v, i) => v + strings[i + 1]).join('');

class IndexElement extends Element {
  static get is() {
    return 'index-element';
  }

  static get properties() {
    return {
      message: {
        type: String,
        value: 'Hello World'
      },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      [[message]]
    `;
  }
}

customElements.define(IndexElement.is, IndexElement);