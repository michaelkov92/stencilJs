import { Component, Host, Listen, h } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.scss',
  shadow: true,
})
export class MyContainer {
  @Listen('checkboxChange')
  checkboxChangeHandler(checkboxEvent: CustomEvent<boolean>) {
    console.log('checkbox state update:', checkboxEvent.detail);
  }
  public onOptionsChange(ev): void {
    console.log('selection change update: ', ev.detail);
  }
  render() {
    return (
      <Host>
        <wc-checkbox label="Click on me"></wc-checkbox>
        <wc-select
          options={['android', 'ios', 'macOs', 'windows', 'linux']}
          label="select your os"
          initialValue="windows"
          onOptionsChange={ev => this.onOptionsChange(ev)}
        ></wc-select>
      </Host>
    );
  }
}
