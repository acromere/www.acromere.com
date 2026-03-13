import "../css/download.css"
import Config from "../Config.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DownloadTile(props: any) {
  const category = props.cards[props.category]
  const card = category && props.cards[props.category][props.platform.KEY]
  const artifact = card && card.artifact
  const version = card && card.version
  const ext = props.platform.INSTALLER_EXT
  const downloadUrl = Config.DOWNLOAD_URL + '/' + props.category + '/' + artifact + '/' + props.platform.KEY + '/' + props.pack + '/' + ext

  const disabled = version === undefined
  let style: string = 'download ' + props.type + (disabled ? ' disabled' : " " + props.category)

  if (disabled) {
    return (
      <div className={style}>
        <DownloadTileCore type={props.type} category={props.category} product={props.product} cards={props.cards} platform={props.platform} pack={props.pack}/>
      </div>
    )
  } else {
    return (
      <a className={style} href={downloadUrl}>
        <DownloadTileCore type={props.type} category={props.category} product={props.product} cards={props.cards} platform={props.platform} pack={props.pack}/>
      </a>
    )
  }
}

function DownloadTileCore(props: any) {
  const category = props.cards[props.category]
  const card = category && props.cards[props.category][props.platform.KEY]
  const version = card && card.version

  const platformSize = props.type === 'primary' ? '3x' : '2x'
  const platformIcon: any = props.type === 'primary' ? 'download' : ['fab', props.platform.ICON]

  const tileVersion = (version === undefined) ? 'unavailable' : version

  return (
    <div className='download-layout'>
      <FontAwesomeIcon className='download-icon' icon={platformIcon} size={platformSize}/>
      <div className='download-metadata'>
        <div className='title'>{props.product} for {props.platform.NAME}</div>
        <div>{tileVersion}</div>
      </div>
    </div>
  )
}