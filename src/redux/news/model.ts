export interface NewsPostRequest {
  title?:string
  description?: string
  img?: string
  category?: string
 }

 export interface CommentPostRequest{
   comment?:string
   feed_id?:string
   user_id?:string
 }