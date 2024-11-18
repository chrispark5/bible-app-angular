import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css',
})
export class ChapterComponent implements OnInit {
  chapterId: string | null = null;
  bookId: string | null = null;
  bookDetails: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private bibleService: BibleService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bibleId');
    this.chapterId = this.route.snapshot.paramMap.get('chapterId');
    if (this.chapterId) {
      this.fetchBookDetails(this.chapterId);
    }
  }

  fetchBookDetails(bibleId: string) {
    this.bibleService.getVerses(bibleId).subscribe({
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
  navToVerse(bibleId: string, chapterId: string, verse: string) {
    console.log('navigating');
    this.router.navigate(['/book', bibleId, chapterId, verse]);
  }
}
