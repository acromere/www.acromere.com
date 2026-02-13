import React, {ReactElement} from 'react';

export default function ForwardTo(props: any): ReactElement<any, any> {
  console.log(props.path);

  const handleClick = () => {
    console.log(props.path);
    window.location.assign(props.path);
  }

  return (
    <div>
      <button onClick={handleClick} type="button"/>
    </div>
  );
}