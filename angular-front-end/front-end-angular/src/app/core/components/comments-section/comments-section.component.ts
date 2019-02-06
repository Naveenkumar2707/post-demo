import { Component, OnInit,ViewChild } from "@angular/core";
import { GlobalVariables } from '../../services/GlobalVAriables';
import { Subscription } from 'rxjs'
import { Posts } from '../../../shared/models/post-model';
import { APIUtilsService  } from '../../services/api.utils.service';
import { RouterModule,Router  } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Comments } from '../../../shared/models/comment-model';

@Component({
  selector: "app-comments-section",
  templateUrl: "./comments-section.component.html",
  styleUrls: ["./comments-section.component.scss"]
})
export class CommentsSectionComponent implements OnInit {
  subscription: Subscription;
  postDeatil: Posts;
  commentsList : Comments[];
  @ViewChild('commentForm') commentForm : NgForm;
  constructor(private globalVariables:GlobalVariables,private router: Router,private api :APIUtilsService) {}

  ngOnInit() {
     this.managePostDeatil();
     
  }
 

  managePostDeatil() : void{
    this.subscription =   this.globalVariables.currentPostDeatil.subscribe((data)=>{
      this.postDeatil = data; 
      (this.postDeatil != undefined ) ? this.managePostComments(this.postDeatil.post_id) :  this.router.navigate(['/'])
     })
  }

  managePostComments(post_id : number ):void{
     this.api.post('comment/getpostdetail',{'post_id':post_id}).subscribe((data)=>{
       this.commentsList = data.data.sort(function(a,b){
        return new Date(b.created_at).getTime()  - new Date(a.created_at).getTime();
        });;
     })
  }

  createcomment() : void{
    console.log(this.commentForm);
    this.api.post('comment/createcomment',{'post_id':this.postDeatil.post_id, 'comment' : this.commentForm.value.comment  }).subscribe((data)=>{
      
      if(data.error){
         alert(data.error_msg);
       } else{
        this.commentForm.reset();
       this.commentsList.unshift(data.data);
       }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
