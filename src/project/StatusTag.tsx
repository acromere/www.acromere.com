import {ReactElement} from "react";

export default function StatusTag(props: { ident: string; icon: ReactElement<any, any>; name: string; org?: string }) {
  let org = props.org;
  if( props.org === undefined ) {
    org = 'acromere'
  }
  console.log("org = " + org);
  return (
    <div className='project-bar'>
      <a href={"https://github.com/"+ org + "/" + props.ident}>
        <span className='product-icon'>{props.icon}</span>
      </a>
      <div className='body'>
        {/*<h6>{props.name}</h6>*/}
        <a href={'https://github.com/'+ org + '/' + props.ident + '/actions/workflows/ci.yml'}>
          <img alt={props.name + " Build Status"} src={"https://github.com/"+ org + "/" + props.ident + "/actions/workflows/ci.yml/badge.svg"}/>
        </a>
      </div>
    </div>
  )
}
