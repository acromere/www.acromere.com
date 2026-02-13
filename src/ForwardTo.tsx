import React, {ReactElement} from 'react';
import { useNavigate } from "react-router";

export default function ForwardTo(props: any): ReactElement<any, any> {
  let navigate = useNavigate();

  console.log(props.path);

  const handleClick = () => {
    console.log(props.path);
    window.location.assign(props.path);
  }

  return (
    <button onClick={() => navigate(props.path)}>
      Go Back
    </button>
  );
}