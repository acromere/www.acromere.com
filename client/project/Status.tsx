import Icon from "../Icon.tsx";
import StatusTag from "./StatusTag";

export default function Status() {
  return (
    <div className='columns'>
      <div className='column product-status'>
        <h3>Products</h3>
        <StatusTag ident='xenon' icon={Icon.XENON} name='Xenon'/>
        <StatusTag ident='weave' icon={Icon.WEAVE} name='Weave'/>
        <StatusTag ident='acorn-cli' icon={Icon.ACORN} name='Acorn CLI'/>
        <StatusTag ident='seenc' icon={Icon.SEENC} name='Seenc'/>
        <h3>Libraries</h3>
        <StatusTag ident='marea' icon={Icon.CURVE} name='Marea'/>
        <StatusTag ident='curve' icon={Icon.CURVE} name='Curve'/>
        <StatusTag ident='xenos' icon={Icon.XENOS} name='Xenos'/>
        <StatusTag ident='zenna' icon={Icon.ZENNA} name='Zenna'/>
        <StatusTag ident='zerra' icon={Icon.ZERRA} name='Zerra'/>
        <StatusTag ident='zevra' icon={Icon.ZEVRA} name='Zevra'/>
      </div>
      <div className='column product-status'>
        <h3>Xenon Modules</h3>
        <StatusTag ident='acorn' icon={Icon.ACORN} name='Acorn'/>
        <StatusTag ident='aveon' icon={Icon.AVEON} name='Aveon'/>
        <StatusTag ident='carta' icon={Icon.CARTA} name='Cartesia'/>
        <StatusTag ident='mazer' icon={Icon.MAZER} name='Mazer'/>
        <StatusTag ident='recon' icon={Icon.RECON} name='Recon'/>
        <StatusTag ident='sysup' icon={Icon.SYSUP} name='Sysup'/>
        <h3>Partner Modules</h3>
        <StatusTag ident='HyperSynesthesia' icon={Icon.HYPERS} name='HyperSynesthesia' org='Dakkra'/>
      </div>
      <div className='column product-status'>
        <h3>Web Sites/Apps</h3>
        <StatusTag ident='www.acromere.com' icon={Icon.LOGO} name='Acromere Website'/>
        <StatusTag ident='wx.acromere.com' icon={Icon.WEATHER} name='Weather' org='acromere'/>
        <StatusTag ident='www.desertskyrangers.org' icon={Icon.DSR} name='Desert Sky Rangers Website' org='desertskyrangers'/>
        <StatusTag ident='flightdeck' icon={Icon.DSR} name='FlightDeck' org='desertskyrangers'/>
        <h3>Maven Plugins</h3>
        <StatusTag ident='cameo' icon={Icon.CAMEO} name='Cameo'/>
        <StatusTag ident='curex' icon={Icon.CUREX} name='Curex'/>
        <h3>Other</h3>
        <StatusTag ident='roave' icon={Icon.LOGO} name='Roave'/>
        <StatusTag ident='tiler' icon={Icon.LOGO} name='Tiler'/>
      </div>
    </div>
  )
}
