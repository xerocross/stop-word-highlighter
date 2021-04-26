import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWordEditorComponent } from './stop-word-editor.component';

describe('StopWordEditorComponent', () => {
  let component: StopWordEditorComponent;
  let fixture: ComponentFixture<StopWordEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopWordEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopWordEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
