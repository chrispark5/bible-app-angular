import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { BibleBooksComponent } from '../bible-books/bible-books.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [PostComponent, BibleBooksComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {}
