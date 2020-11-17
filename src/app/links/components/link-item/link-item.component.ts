import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hs-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
