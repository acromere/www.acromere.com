import '../../css/resource.css'
import React from "react";
import Icon from "../../Icon";

export default function XenonModules() {

  return (
    <div className='content'>
      <div className='product'>

        <div className='product-title'>
          <span className="product-icon">{Icon.XENON}</span>
          <div className='product-name'>Xenon Modules</div>
        </div>

        <div className='product-bar'>
          <a href='/product/xenon'><span className="product-icon">{Icon.XENON}</span></a>
          <div className='body'>
            <div>
              <a href='/product/xenon'>Xenon</a> is an application framework
              that provides common services for modern desktop applications.
              Specific functionality is implemented with downloadable packages
              called modules. Users are encouraged to discover and utilize the
              modules that best suit their needs.
            </div>
          </div>
        </div>

        <div className='product-bar'>
          <a href='https://github.com/acromere/acorn'><span className="product-icon">{Icon.ACORN}</span></a>
          <div className='body'>
            <div><a href='https://github.com/acromere/acorn'>Acorn</a> provides
              a tool to score system performance in Java. The tool computes
              simple metrics for the current system and displays a score to
              compare the performance on different Java Virtual Machines for
              different hardware.
            </div>
          </div>
        </div>

        <div className='product-bar'>
          <a href='https://github.com/acromere/carta'><span className="product-icon">{Icon.CARTA}</span></a>
          <div className='body'>
            <div><a href='https://github.com/acromere/carta'>Cartesia</a> provides
              basic 2D and 3D computer aided design tools. Generally
              designed for hobbyists and crafters to have simple and
              inexpensive computer aided design tools available.
            </div>
          </div>
        </div>

        <div className='product-bar'>
          <a href='https://github.com/acromere/recon'><span className="product-icon">{Icon.RECON}</span></a>
          <div className='body'>
            <div><a href='https://github.com/acromere/recon'>Recon</a> provides
              a tool to monitor access to network devices from the current
              system. This is helpful for tracking down simple network
              connectivity and accessibility issues.
            </div>
          </div>
        </div>

      </div>

    </div>
  )

}
