import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogLogoutComponent } from '../dialogs/dialog-logout/dialog-logout.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  userLocal: any
  showFiller:boolean = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ){
    this.userLocal = JSON.parse(localStorage.getItem('infoUser') || '{}');
  }

  menuNavRoot(root: string){
    this.router.navigate(['/'+root]);
  }

  openLogout(): void{
    const dialogRef = this.dialog.open(DialogLogoutComponent, {
      width: '450px',
      data: {title: "CERRAR SESIÓN", text: "¿Está seguro de cerrar la sesión de usuario actual?"},
      disableClose: true,
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        window.localStorage.removeItem('infoUser');
        this.router.navigate(['/login']);
      }
    })
  }
}
