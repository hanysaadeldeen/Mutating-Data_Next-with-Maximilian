"use client";

import React from "react";

import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const stauts = useFormStatus();

  if (stauts.pending) {
    return <p>Loading Sumbit...</p>;
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
};

export default FormSubmit;
