"use client";
import React from "react";
import FormSubmit from "@/components/formSubmit";

import { useFormState } from "react-dom";
const Postform = ({ action }) => {
  const [state, formState] = useFormState(action, {});

  return (
    <form action={formState}>
      <p className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p className="form-control">
        <label htmlFor="image">Image URL</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image"
          name="image"
        />
      </p>
      <p className="form-control">
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" />
      </p>
      <p className="form-actions">
        <FormSubmit />
      </p>
      {state.error && (
        <ul className="form-errors">
          {state.error.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      )}
    </form>
  );
};

export default Postform;
