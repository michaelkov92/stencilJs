import { Component, Host, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'wc-select',
  styleUrl: 'wc-select.scss',
  shadow: true,
})
export class WcSelect {
  @Prop() options: Array<string> = [];
  @Prop() label: string = '';
  @Prop() initialValue: string = '';
  @State() selectedValue: string = this.initialValue;
  @State() ddlOpen: boolean = false;
  @Event({
    eventName: 'optionsChange',
    bubbles: true,
  })
  optionsChange: EventEmitter<string>;

  onItemSelection(selection: string) {
    this.selectedValue = selection;
    this.ddlOpen = false;
    this.optionsChange.emit(selection);
  }
  render() {
    return (
      <Host>
        <div class="wc-select-wrapper">
          <label>{this.label}</label>
          <div class="wc-select-selected-value-container" onClick={() => (this.ddlOpen = !this.ddlOpen)}>
            {this.selectedValue.length ? this.selectedValue : 'Please select an option...'}
          </div>
          {this.ddlOpen && (
            <div class="ddl-options">
              {this.options.map((option: string) => (
                <div class="ddl-option-item" onClick={() => this.onItemSelection(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
