/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * 
 * */
class Entity { 
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  constructor() {
    this.URL = '';
  }

  static list(data, callback){
    createRequest({
      url: new this().URL,
      method: 'GET',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(err, response);
      }
    });
    // Метод посылает GET запрос на адрес, заданный URL. Метод запускает выполнение функции createRequest.
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest({
      url: new this().URL,
      method: 'PUT',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(err, response);
      }
    });
    // Метод посылает PUT запрос на адрес, заданный URL. Метод запускает выполнение функции createRequest.
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback ) {
    // Метод посылает DELETE запрос на адрес, заданный URL. Метод запускает выполнение функции createRequest.
    createRequest({
      url: new this().URL,
      method: 'DELETE',
      responseType: 'json',
      data,
      callback: (err, response) => {
        callback(err, response);
      }
    });
  }
}
