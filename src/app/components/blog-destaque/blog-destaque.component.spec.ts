import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDestaqueComponent } from './blog-destaque.component';

describe('BlogDestaqueComponent', () => {
  let component: BlogDestaqueComponent;
  let fixture: ComponentFixture<BlogDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDestaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
