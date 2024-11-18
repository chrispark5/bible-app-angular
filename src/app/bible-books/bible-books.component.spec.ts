import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleBooksComponent } from './bible-books.component';

describe('BibleBooksComponent', () => {
  let component: BibleBooksComponent;
  let fixture: ComponentFixture<BibleBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
