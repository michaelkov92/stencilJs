import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-textarea',
  styleUrl: 'my-textarea.scss',
  shadow: true,
})
export class MyTextarea {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() rows: number;
  @Prop() cols: number;
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <div class="my-textarea">
          <label>{this.label}</label>
          <textarea name={this.label} rows={this.rows} cols={this.cols} disabled={this.disabled} placeholder={this.placeholder}></textarea>
        </div>
      </Host>
    );
  }
}
