import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { ResultDialogComponent } from './result-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MaterialModule } from '../../material-module';

describe('ResultDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainer: OverlayContainer;
  let component: ResultDialogComponent;
  let fixture: ComponentFixture<ResultDialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDialogComponent ],
      imports: [MaterialModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
        { provide: MatDialog, useClass: mockDialogRef }
      ]
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ResultDialogComponent]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([MatDialog, OverlayContainer],
    (d: MatDialog, oc: OverlayContainer) => {
      dialog = d;
      overlayContainer = oc;
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCancel should close the dialog', () => {
    component.onClose();
    expect(mockDialogRef.close()).toHaveBeenCalled();
  });
});
