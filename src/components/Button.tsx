import React from "react";

interface Props {
  title: string;
}

export function Button(props: Props) {
  const {title} = props;

  return (
    <div>
      <button>{title}</button>
    </div>
  );
}
