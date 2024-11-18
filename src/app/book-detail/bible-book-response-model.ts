import { BibleBookChapter } from './bible-book-chapter.model';

export interface BibleBookResponse {
  data: BibleBookChapter[]; // This will hold the array of Bible books
}
