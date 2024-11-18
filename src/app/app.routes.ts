import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ChapterComponent } from './chapter/chapter.component';
import { HomePageComponent } from './home-page/home-page.component';
export const routes: Routes = [
  { path: 'explore', component: FirstComponent },
  { path: 'account', component: SecondComponent },
  { path: 'book/:bibleId', component: BookDetailComponent },
  { path: 'book/:bibleId/:chapterId', component: ChapterComponent },
  { path: '', component: HomePageComponent },
];
