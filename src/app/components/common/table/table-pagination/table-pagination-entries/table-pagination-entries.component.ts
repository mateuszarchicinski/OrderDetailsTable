import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-table-pagination-entries',
    templateUrl: './table-pagination-entries.component.html',
    styleUrls: ['./table-pagination-entries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePaginationEntriesComponent implements OnInit {

    @Input() activeEntryNumber: number;
    @Input() entryNumbers: number[];

    @Output() entryNumberChange: EventEmitter<number> = new EventEmitter();

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    generateForm(): FormGroup {
        return this.formBuilder.group({entryNumber: [null]});
    }

    handleEntryNumberChange(entryNumber: number): void {
        if (this.activeEntryNumber !== entryNumber) {
            this.entryNumberChange.emit(entryNumber);
        }
    }

    trackByFn(index: number, entryNumber: number): number {
        return entryNumber;
    }

    ngOnInit(): void {
        this.form = this.generateForm();
        const entryNumber = this.activeEntryNumber;
        this.form.patchValue({entryNumber});
    }

}
