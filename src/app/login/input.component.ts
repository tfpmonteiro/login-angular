import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-component',
  templateUrl: './input-component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() labelDescricao: string;
  @Input() placeholder: string;
  @Input() type: string;
}
