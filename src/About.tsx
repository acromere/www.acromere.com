import './css/product.css';

import {Icon} from "./Icon.tsx";

export default function About() {
  return (
    <div className='content product'>
      <span className='body'>{Icon.ACROMERE}</span>
      <div className='product-bar'>
        <span className="product-icon">{Icon.EMPTY}</span>
        <div className='body'>
          <div>
            We are a small group of engineers, students, hobbyists and
            artists that create unique products for the work we do. We
            hope others will find our tools useful for their own work.
          </div>
        </div>
      </div>

      <h2>Icons</h2>

      <div className='product-bar'>
        <span className="product-icon">{Icon.ACROMERE}</span>
        <div className='body'>
          <div>
            The Acromere "peak" icon is a stylized mountain with the <a href='https://en.wikipedia.org/wiki/Pyramidal_peak'>peak</a> highlighted
            to represent the "acro" (height, tip, top, or extremity) "mere" (part, segment, portion, division),
            or "top part". This represents our goal to strive for excellence in all we do.
            Areas of interest include: drone aerospace, software engineering, weather, astronomy, and more.
          </div>
        </div>
      </div>

      <div className='product-bar'>
        <span className="product-icon">{Icon.XENON}</span>
        <div className="body">
          <div>
            The Xenon &quot;X&quot; icon is a stylized <a href='https://en.wikipedia.org/wiki/Bipolar_nebula'>bipolar planetary nebula</a> surrounded
            by an accretion disk that causes the gas to stay in a double cone-like
            structure similar to the <a href='https://en.wikipedia.org/wiki/NGC_6302'>Butterfly Nebula</a> or
            the <a href='https://en.wikipedia.org/wiki/Egg_Nebula'>Egg Nebula</a>. It
            has also been considered to be a
            binary <a href='https://en.wikipedia.org/wiki/Herbig%E2%80%93Haro_object'>Herbig-Haro object</a> with
            the stars orbiting such that their axes are perpendicular to each other, even
            though no such object has been observed that we are aware of.
          </div>
        </div>
      </div>
    </div>
  )
}