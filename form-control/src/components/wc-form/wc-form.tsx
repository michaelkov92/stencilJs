import { Component, Listen, Prop, State, h } from '@stencil/core';
import { IFormData } from './wc-form.interface';

@Component({
  tag: 'wc-form',
  styleUrl: 'wc-form.scss',
  shadow: true,
})
export class WcForm {
  @Prop({ mutable: true }) form: IFormData;
  @State()
  formData: IFormData;
  @Listen('inputChange')
  handleInputChange(ev: CustomEvent<any>) {
    this.form = { ...this.form, ...ev.detail };
    console.log(this.form);
  }
  @Listen('optionsChange')
  handleOptionsChange(ev: CustomEvent<any>) {
    this.form = { ...this.form, option: ev.detail };
    console.log(this.form);
  }
  @Listen('checkboxChange')
  handleCheckboxChange(ev: CustomEvent<any>) {
    this.form = { ...this.form, selected: ev.detail };
    console.log(this.form);
  }

  public submit(e: any): void {
    e.preventDefault();
    console.log('form submitted: ', this.form);
  }
  render() {
    return (
      <host>
        <div class="form-wrapper">
          <form onSubmit={e => this.submit(e)}>
            <my-input inputType={'text'} label={'name'}></my-input>
            <br />
            <my-input inputType={'number'} label={'phone'}></my-input>
            <br />
            <slot></slot>
            <button>Submit</button>
          </form>
        </div>
      </host>
    );
  }
}
