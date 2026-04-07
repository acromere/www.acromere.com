import "../css/download.css"
import Config from "../Config.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DownloadTile(props: any) {
  const category = props.cards[props.category]
  const card = category && props.cards[props.category][props.platform.KEY]
  const artifact = card && card.artifact
  const version = card && card.version
  const extension: string = props.platform.INSTALLER_EXT
  const extensions: string[] = props.platform.INSTALLER_EXTS
  const downloadUrl = Config.DOWNLOAD_URL + '/' + props.category + '/' + artifact + '/' + props.platform.KEY + '/' + props.pack + '/'
  const productDownloadUrl = Config.DOWNLOAD_URL + '/' + props.category + '/' + artifact + '/' + props.platform.KEY + '/product/jar'

  const enabled = version !== undefined
  const style: string = 'download ' + props.type + (enabled ? " " + props.category : ' disabled')

  if (enabled) {
    return (
      <a className={style} href={downloadUrl + extension}>
        <DownloadTileCore enabled={enabled} type={props.type} category={props.category} product={props.product} cards={props.cards} platform={props.platform} pack={props.pack}
                          downloadUrl={downloadUrl} extensions={extensions} productDownloadUrl={productDownloadUrl}/>
      </a>
    )
  } else {
    return (
      <div className={style}>
        <DownloadTileCore enabled={enabled} type={props.type} category={props.category} product={props.product} cards={props.cards} platform={props.platform} pack={props.pack}/>
      </div>
    )
  }
}

function DownloadTileCore(props: any) {
  const enabled = props.enabled || false
  const category = props.cards[props.category]
  const card = category && props.cards[props.category][props.platform.KEY]
  const version = card && card.version
  const downloadUrl = props.downloadUrl || ''
  const productDownloadUrl = props.productDownloadUrl || ''
  const extensions: string[] = props.extensions || []

  const platformSize = props.type === 'primary' ? '3x' : '2x'
  const platformIcon: any = props.type === 'primary' ? 'download' : ['fab', props.platform.ICON]

  const tileVersion = (version === undefined) ? 'unavailable' : version

  return (
    <div className='download-layout'>
      <FontAwesomeIcon className='download-icon' icon={platformIcon} size={platformSize}/>
      <div className='download-metadata'>
        <div className='title'>{props.product} for {props.platform.NAME}</div>
        <div>{tileVersion}</div>
        {(() => {

          if (enabled) return (
            <div>
              {extensions.map((item) => (
                <a className='subtile' href={downloadUrl + item}>[{item}]</a>
              ))}
              <a className='subtile' href={productDownloadUrl}>[jar]</a>
            </div>
          )

        })()}
      </div>
    </div>
  )
}
