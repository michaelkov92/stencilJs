import { Component, Host, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.scss',
  shadow: true,
})
export class MyContainer {
  render() {
    return (
      <Host>
        <h3>My form</h3>
        <wc-form>
          <wc-checkbox label="Employed"></wc-checkbox>
          <wc-select options={['android', 'ios', 'macOs', 'windows', 'linux']} label="select your os" initialValue="windows"></wc-select>
        </wc-form>
      </Host>
    );
  }
}
