import { Element } from '@polymer/polymer/polymer-element.js';
import { html } from '../utils.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-styles/typography.js';

import template from './index-element.template.html';

class IndexElement extends Element {
  static get is() {
    return 'index-element';
  }

  static get properties() {
    return {
      message: {
        type: String,
        value: 'Polymer 3 Hello World'
      },
    };
  }

  static get template() {
    return html`${template}`;
  }
}

customElements.define(IndexElement.is, IndexElement);
