import '../../css/product.css';
import '../../css/resource.css'
import React, {ReactElement, RefObject, useEffect, useRef, useState} from 'react';
import Icon from '../../Icon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Platform from "../../Platform.tsx";
import DownloadTile from "../DownloadTile.tsx";
import AcromereApi from "../../client/AcromereApi.tsx";

library.add(fas, fab);

export default function XenonProduct(this: any): ReactElement<any, any> {

  const [cards, setCards] = useState({})

  const documentLink: RefObject<string> = useRef<string>('/product/xenon/docs/api/index.html');

  useEffect((): void => {
    AcromereApi.productCards(
      'xenon',
      (cards: any): void => {
        setCards(cards);
      },
      (): void => {
      });
  }, []) // Empty array ensures it runs only on mount

  return (
    <div className='content'>
      <div className='product'>

        <div className='product-title'>
          <span className="product-icon">{Icon.XENON}</span>
          <div className='product-name'>Xenon</div>
        </div>

        <div className='product-content'>
          Xenon is an application framework that provides common services for
          modern desktop applications. Specific functionality is implemented
          with downloadable packages called modules. Users are encouraged to
          discover and utilize the modules that best suit their needs.
        </div>

        <div className='download-row'>
          <DownloadTile type='primary' category='stable' product='Xenon' cards={cards} setCards={setCards} platform={Platform.CURRENT} pack='install'/>
        </div>

        <div className='resource-row'>
          <div className='resource-tile'>
            <div><a href='/product/xenon/docs/user-guide'><FontAwesomeIcon icon={['fas', 'user']}/> User Guide</a></div>
            <div><a href='/product/xenon/modules'><FontAwesomeIcon icon={['fas', 'cubes']}/> Modules</a></div>
            <div><a href='/product/xenon/docs/screenshots'><FontAwesomeIcon icon={['fas', 'desktop']}/> Screenshots</a></div>
          </div>
          <div className='resource-tile'>
            <div><a href='/product/xenon/docs/module-guide'><FontAwesomeIcon icon={['fas', 'file']}/> Building Modules</a></div>
            <div><a href='/product/xenon/docs/tool-guide'><FontAwesomeIcon icon={['fas', 'file']}/> Building Tools</a></div>
            <div><a href={documentLink.current}><FontAwesomeIcon icon={['fas', 'tools']}/> Xenon API</a></div>
            <div><a href='https://github.com/acromere/xenon' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/> Source Code</a></div>
          </div>
        </div>

        <h3>Other Platforms</h3>
        <div className='download-row'>
          <DownloadTile type='secondary' category='stable' product='Xenon' cards={cards} setCards={setCards} platform={Platform.LINUX} pack='install'/>
          <DownloadTile type='secondary' category='stable' product='Xenon' cards={cards} setCards={setCards} platform={Platform.MACOS} pack='install'/>
          <DownloadTile type='secondary' category='stable' product='Xenon' cards={cards} setCards={setCards} platform={Platform.WINDOWS} pack='install'/>
        </div>
        <h3>Development Builds</h3>
        <div className='download-row'>
          <DownloadTile type='secondary' category='latest' product='Xenon' cards={cards} setCards={setCards} platform={Platform.LINUX} pack='install'/>
          <DownloadTile type='secondary' category='latest' product='Xenon' cards={cards} setCards={setCards} platform={Platform.MACOS} pack='install'/>
          <DownloadTile type='secondary' category='latest' product='Xenon' cards={cards} setCards={setCards} platform={Platform.WINDOWS} pack='install'/>
        </div>

      </div>
    </div>
  )


}
