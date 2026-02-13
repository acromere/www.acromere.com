import React, {ReactElement} from 'react';
import {useNavigate} from "react-router";

export default function ForwardTo(props: any): ReactElement<any, any> {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.path);
  }

  return (
    <div>
      <button onClick={handleClick} type="button"/>
    </div>
  );
}