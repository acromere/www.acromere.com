import Config from '../Config';

export default class AcromereApi {

  static productCards(product: String, success: any, failure: any) {
    const url = Config.DOWNLOAD_URL + "/product/cards/" + product;
    return fetch(url)
      .then((response) => response.status === 200 ? response.json() : {})
      .then((card) => success(card))
      .catch(failure)
  }

}