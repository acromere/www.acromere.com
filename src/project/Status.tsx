import Icon from "../Icon.tsx";
import {ReactElement} from "react";

function ProductStatus(props: { ident: string; icon: ReactElement<any,any>; name: string; }) {

  return (
    <div className='product-bar'>
      <a href={"https://github.com/acromere/" + props.ident}>
        <span className='product-icon'>{props.icon}</span>
      </a>
      <div className='body'>
        <h6>{props.name}</h6>
        <a href={'https://github.com/acromere/' + props.ident + '/actions/workflows/ci.yml'}>
          <img alt={props.name + " Build Status"} src={"https://github.com/acromere/" + props.ident + "/actions/workflows/ci.yml/badge.svg"}/>
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
      </div>
      <div className='column product-status'>
        <h3>Xenon Mods</h3>
        <ProductStatus ident='acorn' icon={Icon.ACORN} name='Acorn'/>
        <ProductStatus ident='aveon' icon={Icon.AVEON} name='Aveon'/>
        <ProductStatus ident='carta' icon={Icon.CARTA} name='Cartesia'/>
        <ProductStatus ident='mazer' icon={Icon.MAZER} name='Mazer'/>
        <ProductStatus ident='recon' icon={Icon.RECON} name='Recon'/>
      </div>
      <div className='column product-status'>
        <h3>Libraries</h3>
        <ProductStatus ident='marea' icon={Icon.CURVE} name='Marea'/>
        <ProductStatus ident='curve' icon={Icon.CURVE} name='Curve'/>
        <ProductStatus ident='zenna' icon={Icon.ZENNA} name='Zenna'/>
        <ProductStatus ident='zerra' icon={Icon.ZERRA} name='Zerra'/>
        <ProductStatus ident='zevra' icon={Icon.ZEVRA} name='Zevra'/>
      </div>
      <div className='column product-status'>
        <h3>Maven Plugins</h3>
        <ProductStatus ident='cameo' icon={Icon.CAMEO} name='Cameo'/>
        <ProductStatus ident='curex' icon={Icon.CUREX} name='Curex'/>
      </div>
    </div>
  )
}
