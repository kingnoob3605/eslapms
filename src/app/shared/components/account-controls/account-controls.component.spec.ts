import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountControlsComponent } from './account-controls.component';

describe('AccountControlsComponent', () => {
  let component: AccountControlsComponent;
  let fixture: ComponentFixture<AccountControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
