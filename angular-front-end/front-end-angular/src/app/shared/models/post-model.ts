
export interface Response{
    status_code: number;
    error:boolean;
    error_msg:string;
    message:string;
    data: Posts[]
}

export interface Posts {
    first_name: string;
    last_name: string;
    post: string;
    post_id:number;
    user_id:number;
    created_at: any;
  }