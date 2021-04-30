import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  @Input() value?: string="";//'X' | 'O';

  constructor() { }

  ngOnInit(): void {
  }

}
