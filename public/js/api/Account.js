/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  constructor() {
    super();
    this.URL = '/account';
  }

  static get(id = '', callback){
    let userDataObj = JSON.parse(localStorage.user) //{id: '1e41a979cldalease', name: 'Dmitriy', email: 'oleg@demo.ru', password: 'demo'}

    let data = new FormData();
    data.append('email', userDataObj.email);
    data.append('password', userDataObj.password);

    createRequest({
      url: `${new this().URL}/${id}`,
      method: 'GET',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(err, response);
      }
    });
    // Содержит 1 статический метод: get. Метод запускает функцию createRequest.
  } 
}
