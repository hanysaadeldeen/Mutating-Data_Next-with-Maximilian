import Postform from "@/components/post-form";

import { createPost } from "@/app/actions/posts";
export default function NewPostPage() {
  return (
    <>
      <h1>Create a new post</h1>
      <Postform action={createPost} />
    </>
  );
}
