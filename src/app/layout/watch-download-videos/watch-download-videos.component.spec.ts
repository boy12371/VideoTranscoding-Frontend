import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDownloadVideosComponent } from './watch-download-videos.component';

describe('WatchDownloadVideosComponent', () => {
  let component: WatchDownloadVideosComponent;
  let fixture: ComponentFixture<WatchDownloadVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchDownloadVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchDownloadVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
