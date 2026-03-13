import Icon from './Icon';

export default function NotFound() {

  return (
    <div className='content'>
      <h1>{Icon.FROWN} Link Not Found</h1>

      <div className='product-bar'>
        <div className='body'>
          <p>
            The URL you requested is not found on this site! This might be due
            to a bad external link, a bad internal link or simply a typing
            error in the navigation bar. You might find these links helpful to
            get you back on track:
          </p>
          <div>
            <a href='/'><h3>{Icon.LOGO} Acromere Home Page</h3></a>
            <a href='/product/xenon'><h3>{Icon.XENON} Acromere Xenon</h3></a>
            <a href='/products'><h3>{Icon.OTHER} Other Products</h3>
            </a>
          </div>
        </div>
      </div>

    </div>
  )

}
