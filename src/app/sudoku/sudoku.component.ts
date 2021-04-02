import { EventEmitter } from "@angular/core";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output
} from "@angular/core";
import { BoardService } from "../board.service";
import { COORD, emptyBoard, BoardProcessed } from "../generator";

@Component({
  selector: "app-sudoku",
  templateUrl: "./sudoku.component.html",
  styleUrls: ["./sudoku.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuComponent implements OnInit {
  @Input() board: BoardProcessed = emptyBoard;

  constructor(private Board : BoardService) {}

  ngOnInit(): void {}

}
