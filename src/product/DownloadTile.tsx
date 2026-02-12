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
  const platformSize = props.type === 'primary' ? '3x' : '2x'
  const platformIcon: any = props.type === 'primary' ? 'download' : ['fab', props.platform.ICON]

  const disabled = version === undefined

  let style: string
  let tileVersion: string
  if (disabled) {
    style = 'download ' + props.type + ' disabled'
    tileVersion = 'unavailable'
  } else {
    style = 'download ' + props.type +" " + props.category
    tileVersion = version
  }

  return (
    <a className={style} href={downloadUrl}>
      <div className='download-layout'>
        <FontAwesomeIcon className='download-icon' icon={platformIcon} size={platformSize}/>
        <div className='download-metadata'>
          <div className='title'>{props.product} for {props.platform.NAME}</div>
          <div>{tileVersion}</div>
        </div>
      </div>
    </a>
  )
}