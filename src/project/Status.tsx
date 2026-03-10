import Icon from "../Icon.tsx";
import {ReactElement} from "react";

function ProductStatus(props: { ident: string; icon: ReactElement<any, any>; name: string; org?: string }) {
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

export default function Status() {
  return (
    <div className='columns'>
      <div className='column product-status'>
        <h3>Products</h3>
        <ProductStatus ident='xenon' icon={Icon.XENON} name='Xenon'/>
        <ProductStatus ident='weave' icon={Icon.WEAVE} name='Weave'/>
        <ProductStatus ident='acorn-cli' icon={Icon.ACORN} name='Acorn CLI'/>
        <ProductStatus ident='seenc' icon={Icon.SEENC} name='Seenc'/>
        <h3>Libraries</h3>
        <ProductStatus ident='marea' icon={Icon.CURVE} name='Marea'/>
        <ProductStatus ident='curve' icon={Icon.CURVE} name='Curve'/>
        <ProductStatus ident='xenos' icon={Icon.XENOS} name='Xenos'/>
        <ProductStatus ident='zenna' icon={Icon.ZENNA} name='Zenna'/>
        <ProductStatus ident='zerra' icon={Icon.ZERRA} name='Zerra'/>
        <ProductStatus ident='zevra' icon={Icon.ZEVRA} name='Zevra'/>
      </div>
      <div className='column product-status'>
        <h3>Xenon Mods</h3>
        <ProductStatus ident='acorn' icon={Icon.ACORN} name='Acorn'/>
        <ProductStatus ident='aveon' icon={Icon.AVEON} name='Aveon'/>
        <ProductStatus ident='carta' icon={Icon.CARTA} name='Cartesia'/>
        <ProductStatus ident='mazer' icon={Icon.MAZER} name='Mazer'/>
        <ProductStatus ident='recon' icon={Icon.RECON} name='Recon'/>
        <ProductStatus ident='sysup' icon={Icon.SYSUP} name='Sysup'/>
        <h3>Partner Mods</h3>
        <ProductStatus ident='HyperSynesthesia' icon={Icon.HYPERS} name='HyperSynesthesia' org='Dakkra'/>
      </div>
      <div className='column product-status'>
        <h3>Websites</h3>
        <ProductStatus ident='www.acromere.com' icon={Icon.LOGO} name='Website'/>
        <ProductStatus ident='flightdeck' icon={Icon.DSR} name='Website' org='desertskyrangers'/>
        <h3>Maven Plugins</h3>
        <ProductStatus ident='cameo' icon={Icon.CAMEO} name='Cameo'/>
        <ProductStatus ident='curex' icon={Icon.CUREX} name='Curex'/>
        <h3>Other</h3>
        <ProductStatus ident='roave' icon={Icon.LOGO} name='Roave'/>
        <ProductStatus ident='tiler' icon={Icon.LOGO} name='Tiler'/>
      </div>
    </div>
  )
}
