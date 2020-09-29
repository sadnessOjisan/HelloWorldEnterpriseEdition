import * as React from "react";

interface Props {
  message: string;
}

export const App: React.FC<Props> = (props) => <p>{props.message}</p>;
