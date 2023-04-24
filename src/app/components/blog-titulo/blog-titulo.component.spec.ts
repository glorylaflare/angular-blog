import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTituloComponent } from './blog-titulo.component';

describe('BlogTituloComponent', () => {
  let component: BlogTituloComponent;
  let fixture: ComponentFixture<BlogTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
