import { Component, Host, Event, h, Prop, EventEmitter, State } from '@stencil/core';
import { InputType } from './my-input.types';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.scss',
  shadow: true,
})
export class MyInput {
  @Prop() inputType: InputType = 'text';
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() placeholder: string = 'Please enter value...';
  @Event({
    eventName: 'inputChange',
    bubbles: true,
  })
  inputChange: EventEmitter<{ [label: string]: any }>;

  public onInputChange(ev) {
    this.inputChange.emit({ [this.label]: ev.target.value });
  }
  render() {
    return (
      <Host>
        <div class="my-input">
          <label>{this.label}</label>
          <input
            onInput={e => this.onInputChange(e)}
            name={this.label}
            type={this.inputType}
            disabled={this.disabled}
            readOnly={this.readonly}
            placeholder={this.placeholder}
          ></input>
        </div>
      </Host>
    );
  }
}
