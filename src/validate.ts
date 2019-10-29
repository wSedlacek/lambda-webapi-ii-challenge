import { CommentDTO, PostDTO } from './models';

export const validComment = (comment: CommentDTO) => !!comment.post_id && !!comment.text;
export const validPost = (post: PostDTO) => !!post.title && !!post.contents;
