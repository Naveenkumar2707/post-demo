import { Component, OnInit, Inject ,ViewChild} from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { NgForm } from '@angular/forms';
import {AuthService } from '../../services/auth.service';

@Component({
  selector: "app-dialog",
  templateUrl: "./reg-dialog.component.html",
  styleUrls: ["./reg-dialog.component.scss"]
})
export class DialogComponent implements OnInit {


  @ViewChild('registerForm') registerForm : NgForm;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private authService:AuthService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  register():void{
    if(this.registerForm.value.password === this.registerForm.value.confirm_password){
      delete this.registerForm.value.confirm_password;
      this.authService.register(this.registerForm.value).subscribe((data)=>{
        if(data.err){
          alert(data.err_msg);
        }else {
          alert(data.message);
          this.dialogRef.close();
          
        }
      });
    }else{
    alert("Password And confirm password should be same!")
    }
    
  }
}
