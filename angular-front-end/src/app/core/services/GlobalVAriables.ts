import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Posts } from '../../shared/models/post-model'

@Injectable()
export class  GlobalVariables {
    postDeatil : Posts;
    private postDetailSource = new BehaviorSubject(this.postDeatil);
     currentPostDeatil = this.postDetailSource.asObservable();
    
    constructor() {}

    changePostDeatil(newPost: Posts) {
        this.postDetailSource.next(newPost);
      }
}