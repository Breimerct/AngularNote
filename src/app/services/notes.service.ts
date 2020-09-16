import { Note } from './../models/note';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    public fbDB: AngularFireDatabase
  ) { }

  getNotes(){
    return this.fbDB.list<Note>('/notes/').valueChanges();
  }

  getOneNote(id){
    return this.fbDB.list<Note>(`/notes/${id}`)
  }

  createNote(note:Note){
    return this.fbDB.database.ref(`/notes/${note.id}`).set(note)
  }

  editeNote(note:Note){
    return this.fbDB.database.ref(`/notes/${note.id}`).set(note)
  }

  deleteNote(note:Note){
    return this.fbDB.database.ref(`/notes/${note.id}`).remove();
  }

}
