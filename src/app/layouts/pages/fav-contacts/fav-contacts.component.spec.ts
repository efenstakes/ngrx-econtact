import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavContactsComponent } from './fav-contacts.component';

describe('FavContactsComponent', () => {
  let component: FavContactsComponent;
  let fixture: ComponentFixture<FavContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
