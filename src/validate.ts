import { CommentDTO, PostDTO } from './models';
import { findByID } from './data/db';

export const validComment = (comment: CommentDTO) => !!comment.post_id && !!comment.text;
export const validPost = (post: PostDTO) => !!post.title && !!post.contents;
export const validID = async (id: string | number) => !!(await findByID(id));
