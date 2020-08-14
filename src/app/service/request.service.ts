import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient, private firestore: AngularFirestore, private file: AngularFireStorage) {
  }

  getCollection(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  getXItem(collection: string, limit: number) {
    let data = this.firestore.collection(collection, ref => ref.limit(limit)).snapshotChanges();
    return data;
  }

  getImage(path: string) {
    return this.file.ref(path).getDownloadURL();
  }

  getItemWhere(collection: string, key: string, value: string) {
    let data = this.firestore.collection(collection, ref => ref.where(key, "==", value)).snapshotChanges();
    return data;
  }
}
