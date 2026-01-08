import './App.css';
import {Icon} from "./Icon.tsx";

export function App() {
    return (
        <>
            <h1>
                <picture>
                    <source srcSet={Icon.LOGO_LIGHT} media="(prefers-color-scheme: light)"/>
                    <source srcSet={Icon.LOGO_DARK} media="(prefers-color-scheme: dark)"/>
                    <img src="." alt="ACM" width="64" height="64"/>
                </picture>
                &nbsp;Acromere
            </h1>
            <p>We're under construction. Please check back for an update soon.</p>
        </>
    );
}
