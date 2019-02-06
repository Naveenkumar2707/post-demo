import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { RouterModule,Router  } from '@angular/router';
import { DialogComponent } from "../reg-dialog/reg-dialog.component";
import { NgForm } from '@angular/forms';
import {AuthService } from '../../services/auth.service';
import { UserSession } from '../../../shared/models/storage-models';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"]
})
export class LogInComponent implements OnInit {
  
  @ViewChild('loginForm') loginForm : NgForm;
  userDetail : UserSession = {userid : 0,   token:'',email:''} ;
  constructor(public dialog: MatDialog,private authService:AuthService,private storageService:StorageService,private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "590px",
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
     
    });
  }
  ngOnInit() {}

  login( ) : void {
  this.authService.loginWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password).subscribe((data)=>{
    if(data.err){
      alert(data.err_msg);
    }else {
      this.userDetail.userid = data.data.user_id;
      this.userDetail.email = data.data.email;
      this.userDetail.token = data.data.authToken;
      this.storageService.createSession(this.userDetail);
      this.router.navigate(['/'])
    }
  });
      
  }

}
