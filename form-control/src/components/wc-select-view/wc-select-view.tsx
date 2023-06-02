import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-select-view',
  shadow: true,
})
export class WcSelectView {
  render() {
    return (
      <Host>
        <wc-select options={['apple', 'banana', 'melon']} label="Fruits selection:"></wc-select>
      </Host>
    );
  }
}
