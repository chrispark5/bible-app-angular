import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleService } from '../bible.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  bookId: string | null = null;
  bookDetails: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private bibleService: BibleService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bibleId');
    if (this.bookId) {
      this.fetchBookDetails(this.bookId);
    }
  }

  fetchBookDetails(bibleId: string) {
    this.bibleService.getChapters(bibleId).subscribe({
      next: (data) => {
        this.bookDetails = data.data;
      },
      error: (error) => {
        console.error('Error fetching book details:', error);
      },
      complete: () => {
        console.log(this.bookDetails);
        console.log('Fetch completed.');
      },
    });
  }
  navToBookVerses(bibleId: string, chapterId: string) {
    console.log('navigating');
    this.router.navigate(['/book', bibleId, chapterId]);
  }
}
