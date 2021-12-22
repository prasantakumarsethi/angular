import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  @Input() contactinfo = '9178684242';
  constructor() { }

  ngOnInit(): void {
  }

}
