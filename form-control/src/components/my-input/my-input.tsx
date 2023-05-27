import { Component, Host, h, Prop } from '@stencil/core';
import { InputType } from './my-input.types';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {
  @Prop() inputType: InputType;
  @Prop() label: string;
  @Prop() disabled: boolean;
  @Prop() readonly: boolean;
  @Prop() placeholder: string;

  render() {
    return (
      <Host>
        <div class="my-input">
          <label>{this.label}</label>
          <input name={this.label} type={this.inputType} disabled={this.disabled} readOnly={this.readonly} placeholder={this.placeholder}></input>
        </div>
      </Host>
    );
  }
}
