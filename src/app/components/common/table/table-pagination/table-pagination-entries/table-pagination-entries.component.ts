import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-table-pagination-entries',
    templateUrl: './table-pagination-entries.component.html',
    styleUrls: ['./table-pagination-entries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePaginationEntriesComponent {

    @Input() activeEntryNumber: number;
    @Input() entryNumbers: number[];

    @Output() entryNumberChange: EventEmitter<number> = new EventEmitter();

    trackByFn(index: number, entryNumber: number): number {
        return entryNumber;
    }

    handleEntryNumberChange(entryNumber: number): void {
        if (this.activeEntryNumber !== entryNumber) {
            this.entryNumberChange.emit(entryNumber);
        }
    }

}
