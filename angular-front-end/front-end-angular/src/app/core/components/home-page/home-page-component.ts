import { Component, OnInit ,ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import { Posts,Response } from "../../../shared/models/post-model"
import { APIUtilsService } from '../../services/api.utils.service'
import { NgForm } from '@angular/forms';
import { GlobalVariables } from '../../services/GlobalVAriables';
  import { from } from "rxjs";
@Component({
  selector: "app-form",
  templateUrl: "./home-page-component.html",
  styleUrls: ["./home-page-component.scss"]
})
export class HomeComponent implements OnInit {
  posts: Posts[] ;
  // posts: any ;
  @ViewChild('postForm') postForm : NgForm;
  constructor(private router: Router,private api:APIUtilsService,private globalVariables:GlobalVariables) {}

  ngOnInit() {

   this.getPostsDetail();
 
   
  }

 getPostsDetail() : void{
  
  this.api.get('post/getallpost').subscribe((postsData)=>{
    this.posts = postsData.data.sort(function(a,b){
     return new Date(b.created_at).getTime()  - new Date(a.created_at).getTime();
     });
    })

 }

 


  onComments(post : Posts ) {
    this.globalVariables.changePostDeatil(post);
    this.router.navigate(["/comments"]);
  }

  createPost():void{
    console.log(this.postForm);
    this.api.post('post/createpost',{'post_comment':this.postForm.value.name}).subscribe((data)=>{
         this.posts.unshift(data.data);
         this.postForm.reset();
    })

  }
}
