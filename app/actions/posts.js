"use server";

import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let error = [];

  if (title || title.trim().length === 0) {
    error.push("empty title");
  }
  if (content || content.trim().length === 0) {
    error.push("empty content");
  }
  if (image || image.size === 0) {
    error.push("empty image");
  }

  if (error.length > 0) {
    return { error };
  }
  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });
  redirect("/feed");
}
