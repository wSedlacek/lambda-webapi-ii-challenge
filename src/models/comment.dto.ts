export interface CommentDTO {
  id?: number;
  post_id?: number;
  post?: string;
  text: string;
  created_at?: Date;
  updated_at?: Date;
}
