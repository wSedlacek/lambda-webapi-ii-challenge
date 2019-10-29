export interface CommentDTO {
  id?: number;
  post_id: number;
  text: string;
  created_at?: Date;
  updated_at?: Date;
}
