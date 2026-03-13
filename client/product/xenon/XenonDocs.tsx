import React from "react";
import Icon from "../../Icon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function XenonDocs() {
		return (
			<div className='content'>

				<div className='product-title'>
					<span className="product-icon">{Icon.XENON}</span>
					<div className='product-name'>Xenon Documents</div>
				</div>

				<a href="/product/xenon/docs/user-guide"><FontAwesomeIcon icon={['fas', 'user']}/> User Guide</a>
				<a href="/product/xenon/docs/module-guide"><FontAwesomeIcon icon={['fas', 'cubes']}/> Module Developers Guide</a>

			</div>
		)

}
