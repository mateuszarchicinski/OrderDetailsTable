import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface TableFilter {
    name: string;
    id: string;
    options?: TableFilterOption[];
}

export interface TableFilterOption {
    name: string;
    value: any;
}

export interface TableDataFilters {
    [key: string]: any;
}

@Component({
    selector: 'app-table-filter',
    templateUrl: './table-filter.component.html',
    styleUrls: ['./table-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent implements OnInit {

    @Input() filtersModel: TableFilter[];
    @Input() filters: TableDataFilters;

    @Output() filtersChange: EventEmitter<TableDataFilters> = new EventEmitter();

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    private generateForm(): FormGroup {
        return this.filtersModel ? this.formBuilder.group(this.filtersModel.reduce((controls, filter) => {
            return {...controls, [filter.id]: [null]};
        }, {})) : null;
    }

    private patchValues(): void {
        if (this.form) {
            this.form.patchValue(this.filters || {});
        }
    }

    handleFiltersChange(): void {
        if (this.form) {
            this.filtersChange.emit(this.form.value);
        }
    }

    ngOnInit(): void {
        this.form = this.generateForm();
        this.patchValues();
    }

    filterTracker(index: number, filter: TableFilter): string {
        return filter.id;
    }

    optionTracker(index: number, option: TableFilterOption): string {
        return option.value;
    }

}
