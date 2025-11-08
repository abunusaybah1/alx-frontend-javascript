import { RowID, RowElement } from "./interface";

declare function insertRow(row: RowElement): number;
declare function updateRow(rowID: RowID, row: RowElement): void;
declare function deleteRow(rowId: RowID): void;
