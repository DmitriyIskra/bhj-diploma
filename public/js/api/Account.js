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
    
    // Содержит 1 статический метод: get. Метод запускает функцию createRequest.
  } 
}
