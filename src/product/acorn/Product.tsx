import React, {ReactElement, RefObject, useEffect, useRef, useState} from 'react';
import Icon from '../../Icon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import '../../css/product.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Config from "../../Config.tsx";
import Platform from "../../Platform.tsx";
import DownloadTile from "../DownloadTile.tsx";
import AcromereApi from "../../client/AcromereApi.tsx";

library.add(fas, fab);

export default function AcornProduct(this: any):ReactElement<any,any> {

  const [cards, setCards] = useState({})

  const documentLink:RefObject<string> = useRef<string>( '/product/acorn/docs/api/index.html' );

  useEffect(():void => {
    AcromereApi.productCards(
      'acorn-cli',
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
          <span className='product-icon'>{Icon.ACORN}</span>
          <div className='product-name'>Acorn</div>
        </div>

        <div className='product-content'>
          Acorn is a simple system profiling tool. It will run
          anywhere Java is supported. The tool is great for
          getting a quick understanding how your system compares
          with others.
        </div>

        <div className='download-row'>
          <DownloadTile type='primary' category='stable' product='Acorn' cards={cards} setCards={setCards} platform={Platform.ANY} pack='product'/>
        </div>

        <div className='resource-row'>
          <div className='resource-tile'>
            <div><a href={documentLink.current}><FontAwesomeIcon icon={['fas', 'tools']}/> Acorn API</a></div>
          </div>
          <div className='resource-tile'>
            <div><a href='https://github.com/avereon/acorn' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/> Source Code</a></div>
          </div>
        </div>

        <div className='download-row'>
          <DownloadTile type='primary' category='latest' product='Acorn' cards={cards} platform={Platform.ANY} pack='product'/>
        </div>
      </div>

    </div>
  );

}
