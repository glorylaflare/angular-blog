import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSubtituloComponent } from './blog-subtitulo.component';

describe('BlogSubtituloComponent', () => {
  let component: BlogSubtituloComponent;
  let fixture: ComponentFixture<BlogSubtituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSubtituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
