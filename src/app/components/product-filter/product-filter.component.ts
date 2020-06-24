import { Component, Output, EventEmitter, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  /*---- Icons ----*/
  faBars = faBars;
  faThLarge = faThLarge;

  @Input() gridView: boolean;
  @Output() optionSelected = new EventEmitter();
  @Output() viewChange = new EventEmitter();
  form: FormGroup;
  filterOptions = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      selectedOption: [0]
    });

    // async
    of(this.getfilterOptions()).subscribe(option => {
      this.filterOptions = option;
    });
  }

  get selectedOption() {
    return this.form.get('selectedOption');
  }

  getfilterOptions() {
    return [
      { id: 0, name: 'Price: Low to High' },
      { id: 1, name: 'Price: High to Low' }
    ];
  }

  onOptionChange() {
    this.optionSelected.emit(+this.selectedOption.value);
  }

  toggoleView = () => {
    this.gridView = !this.gridView;
    this.viewChange.emit();
  }
}
