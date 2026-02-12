import {useState} from 'react';
import Config from "../Config.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DownloadTile({type, category, product, cards, platform, pack}) {

    const [version, setVersion] = useState<string>("v"+cards.version);

    const card = cards[category][platform.KEY];
    const artifact = card.artifact;
    // const version = card.version;
    const ext = platform.INSTALLER_EXT;

    let style = 'download ' + type;
    const platformSize = type === 'primary' ? '3x' : '2x';
    const platformIcon:any = type === 'primary' ? 'download' : ['fab', platform.ICON];

    return (
        <a className={style + " " + category} href={Config.DOWNLOAD_URL + '/' + category + '/' + artifact + '/' + platform.KEY + '/' + pack + '/' + ext}>
            <div className='download-layout'>
                <FontAwesomeIcon className='download-icon' icon={platformIcon} size={platformSize}/>
                <div className='download-metadata'>
                    <div className='title'>{product} for {platform.NAME}</div>
                    <div>v{cards[category][platform.KEY].version}</div>
                </div>
            </div>
        </a>
    )
}