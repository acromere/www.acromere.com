import Config from "../Config.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DownloadTile(props: any) {

  const category = props.cards[props.category];
  const card = category && props.cards[props.category][props.platform.KEY];
  const artifact = card && card.artifact;
  const version = card && card.version;

  const ext = props.platform.INSTALLER_EXT;

  const style = 'download ' + props.type;
  const downloadUrl = Config.DOWNLOAD_URL + '/' + props.category + '/' + artifact + '/' + props.platform.KEY + '/' + props.pack + '/' + ext;
  const platformSize = props.type === 'primary' ? '3x' : '2x';
  const platformIcon: any = props.type === 'primary' ? 'download' : ['fab', props.platform.ICON];

  return (
    <a className={style + " " + props.category} href={downloadUrl}>
      <div className='download-layout'>
        <FontAwesomeIcon className='download-icon' icon={platformIcon} size={platformSize}/>
        <div className='download-metadata'>
          <div className='title'>{props.product} for {props.platform.NAME}</div>
          <div>{version}</div>
        </div>
      </div>
    </a>
  )
}