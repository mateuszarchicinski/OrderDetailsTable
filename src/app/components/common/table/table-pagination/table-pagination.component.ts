import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-table-pagination',
    templateUrl: './table-pagination.component.html',
    styleUrls: ['./table-pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePaginationComponent {

    @Input() displayedNumberOfEntries: number;
    @Input() numberOfEntries: number;

    @Input() firstPageNumber: number;
    @Input() lastPageNumber: number;
    @Input() activePageNumber: number;
    @Input() pageNumbers: number[];

    @Output() pageNumberChange: EventEmitter<number> = new EventEmitter();

    get isFirstPageChosen(): boolean {
        return this.firstPageNumber === this.activePageNumber
    }

    get isLastPageChosen(): boolean {
        return this.lastPageNumber === this.activePageNumber
    }

    trackByFn(index: number, pageNumber: number): number {
        return pageNumber
    }

}
