// src/app/models/bible-response.model.ts
import { BibleBook } from './bible-book.model';

export interface BibleResponse {
  data: BibleBook[]; // This will hold the array of Bible books
}
