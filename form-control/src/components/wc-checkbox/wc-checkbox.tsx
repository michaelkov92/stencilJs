import { Component, Host, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wc-checkbox',
  styleUrl: 'wc-checkbox.scss',
  shadow: true,
})
export class WcCheckbox {
  @Prop() label: string = '';
  @Prop() checked: boolean = false;
  @Event({
    eventName: 'checkboxChange',
    bubbles: true,
  })
  checkboxChange: EventEmitter<boolean>;
  public toggleCheckbox = () => {
    this.checked = !this.checked;
    this.checkboxChange.emit(this.checked);
  };
  render() {
    return (
      <Host>
        <label>
          <input type="checkbox" checked={this.checked} onChange={() => this.toggleCheckbox()} />
          {this.label}
        </label>
      </Host>
    );
  }
}
