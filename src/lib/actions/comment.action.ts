"use server"

import { connectToDB } from "../db";
import Comment from "../models/comment.model";

export const fetchCommentFromDb = async (movie_id: string) => {
    // console.log(movie_id, '4')
    try {
      connectToDB();
  
      const data= await Comment.find({ movie_id });
        // console.log(data, 'ss');
        
        return data;
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

export async function addComment({
    remarks, movie_id
  }:any): Promise<void> {
    try {
      connectToDB();
  
      await Comment.create(
        {
         remarks,
          movie_id
        },
      );
      return;
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }