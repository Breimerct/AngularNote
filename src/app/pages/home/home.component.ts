import { NotesService } from './../../services/notes.service';
import { Note } from './../../models/note';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  note: Note = {
    name: '',
    categorie: '',
    description: '',
  };

  categories: any[] = [
    { value: 'trabajo', viewValue: 'Trabajo' },
    { value: 'personal', viewValue: 'Personal' },
  ];

  notes: Note[] = new Array();

  nameButton: string = 'Guardar';

  constructor(
    private _noteService: NotesService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this._noteService.getNotes().subscribe((val) => {
      this.notes = val;
    });
  }

  saveNote() {
    if (this.nameButton == 'Guardar') {
      this.note.id = Date.now();
      if (
        this.note.name == '' &&
        this.note.categorie == '' &&
        this.note.description == ''
      ) {
        return;
      }

      this._noteService
        .createNote(this.note)
        .then(() => {
          this.openSnackBar('Nota guardada', '', 500);
          this.clearNote();
        })
        .catch((err) => {
          this.openSnackBar('Error al guardar nota', '', 500);
          console.log({ error: err });
        });
    }else if(this.nameButton == 'Editar'){
      this._noteService.editeNote(this.note)
      .then(() => {
        this.openSnackBar('Nota editada', '', 500);
        this.clearNote();
      })
      .catch((err) => {
        this.openSnackBar('Error al editar nota', '', 500);
        console.log({ error: err });
      });
    }
  }

  deleteNote(note: Note) {
    this._noteService
      .deleteNote(note)
      .then(() => {
        this.openSnackBar('Nota eliminada con exito!', '', 500);
      })
      .catch((err) => {
        this.openSnackBar('Error al eliminar nota', '', 500);
        console.log({ error: err });
      });
  }

  editNote(_note:Note) {
    this.nameButton = 'Editar';
    this.note = _note;
  }

  openSnackBar(message: string, action: string = '', duration: number = 0) {
    this._snackBar.open(message, action, {
      duration: duration,
    });
  }

  getColorButton(){
    if(this.nameButton == 'Guardar'){ return 'primary' }
    else if(this.nameButton == 'Editar') { return 'accent' }
  }

  cancelar(){
    this.nameButton = 'Guardar';
    this.getNotes();
    this.clearNote();
  }

  clearNote() {
    this.note.name = '';
    this.note.categorie = '';
    this.note.description = '';
  }
}
