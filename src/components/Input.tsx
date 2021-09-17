import React from "react";

import "./styles/Input.scss";

interface Props {
  type: string;
}

export function Input(props: Props) {
  const {type} = props;

  return (
    <div>
      <input type={type} />
    </div>
  );
}
