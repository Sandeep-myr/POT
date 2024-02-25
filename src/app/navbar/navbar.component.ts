import { Component } from '@angular/core';
import { ContractorRegistrationComponent } from '../contractor-registration/contractor-registration.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // constructor(public dialog: MatDialog) {}

  // openRegistrationDialog(): void {
  //   const dialogRef = this.dialog.open(ContractorRegistrationComponent, {
  //     width: '500px', // Adjust the width as needed
  //     // Optionally, you can set other dialog options here
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // You can handle dialog close event here if needed
  //   });
//  }
}
