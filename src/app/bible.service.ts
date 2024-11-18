// bible.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BibleBook } from './bible-books/bible-book.model';
import { BibleResponse } from './bible-books/bible-response.model';
import { BibleBookResponse } from './book-detail/bible-book-response-model';
import { BibleChapterResponse } from './chapter/bible-chapter-response-model';

@Injectable({
  providedIn: 'root',
})
export class BibleService {
  private apiUrl = 'http://127.0.0.1:5000/api/books'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BibleResponse> {
    return this.http.get<BibleResponse>(this.apiUrl);
  }
  getChapters(bibleId: string): Observable<BibleBookResponse> {
    const newUrl = this.apiUrl + '/' + bibleId;
    return this.http.get<BibleBookResponse>(newUrl);
  }
  getVerses(chapterId: string): Observable<BibleChapterResponse> {
    const newUrl = this.apiUrl + '/chapter/' + chapterId;
    return this.http.get<BibleChapterResponse>(newUrl);
  }
}
