import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { CommonModule } from '@angular/common';
import { BibleBook } from './bible-book.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bible-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bible-books.component.html',
  styleUrl: './bible-books.component.css',
})
export class BibleBooksComponent implements OnInit {
  bibleBooks: BibleBook[] = [];

  constructor(private bibleService: BibleService, private router: Router) {}

  ngOnInit(): void {
    this.bibleService.getBooks().subscribe((response) => {
      this.bibleBooks = response.data;
    });
  }
  navToBookDetail(bibleId: string) {
    console.log('navigating');
    this.router.navigate(['/book', bibleId]);
  }
}
