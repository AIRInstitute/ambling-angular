import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  showTextDash: boolean;
  showTextConfig: boolean;

  constructor(
    private router: Router,
  ){
    this.showTextDash = false;
    this.showTextConfig = false;
  }

  menuNavRoot(root: string){
    this.router.navigate(['/'+root]);
  }

}
