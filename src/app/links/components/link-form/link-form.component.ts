import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hs-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
