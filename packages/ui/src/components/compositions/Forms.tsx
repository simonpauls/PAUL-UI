import React from "react";
import { Form, type FormProps } from "../Field/Field";

export type FormBoxProps = FormProps;

export function FormBox({ children, ...props }: FormBoxProps) {
  return (
    <Form {...props} style={{ display: "flex", flexDirection: "column", gap: "24px", ...props.style }}>
      {children}
    </Form>
  );
}
