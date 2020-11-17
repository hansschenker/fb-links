import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Link } from './types/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  links[];

  constructor(private db: AngularFirestore { }

  updateLinks() {
    this.links.forEach(function(link: Link) {
      db.collection("links").add({
          name: link.name,
          description: link.description,
          url: link.url,
          category: link.category
      }).then(function(docRef) {
          console.log("Document written with ID: ", docRef.uid);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  }
};
