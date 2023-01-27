/**
 * Класс AccountsWidget управляет блоком
 * отображения счетов в боковой колонке
 * */

// const { response } = require("express");

class AccountsWidget {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Вызывает AccountsWidget.update() для получения
   * списка счетов и последующего отображения
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if(element) {
      this.element = element;
    }
    else {
      throw new Error('Не передан элемент в аккаунт виджет');
    };

    this.registerEvents();
  };

  /**
   * При нажатии на .create-account открывает окно    /////////
   * #modal-new-account для создания нового счёта     /////////
   * При нажатии на один из существующих счетов       ???????
   * (которые отображены в боковой колонке),          ???????
   * вызывает AccountsWidget.onSelectAccount()        ??????
   * */
  registerEvents() {
    this.element.addEventListener('click', e => {
      if(e.target.matches('.create-account')) {
        const el = App.getModal('createAccount');
        const modalCreateAccaunt = new Modal(el.activeElement);
        modalCreateAccaunt.open();

        modalCreateAccaunt.registerEvents();
      }
    });
  };

  /**
   * Метод доступен только авторизованным пользователям
   * (User.current()).
   * Если пользователь авторизован, необходимо
   * получить список счетов через Account.list(). При
   * успешном ответе необходимо очистить список ранее
   * отображённых счетов через AccountsWidget.clear().
   * Отображает список полученных счетов с помощью
   * метода renderItem()
   * */
  update() {
    if(User.current()) {
      const dataUser = JSON.parse(localStorage.user);

      const data = {
        email: dataUser.email,
        password: dataUser.password,
      };

      const callback = (err, response) => {
        
      }

      Account.list(data, callback)
      // очистить список отображённых счетов через AccountsWidget.clear()
      // Отображает список полученных счетов с помощью метода renderItem()
    }
    
  }

  /**
   * Очищает список ранее отображённых счетов.
   * Для этого необходимо удалять все элементы .account
   * в боковой колонке
   * */
  clear() {
    const collectionAccount = this.element.querySelectorAll('.account');
    collectionAccount.forEach(element => element.remove());
  }

  /**
   * Срабатывает в момент выбора счёта
   * Устанавливает текущему выбранному элементу счёта
   * класс .active. Удаляет ранее выбранному элементу
   * счёта класс .active.
   * Вызывает App.showPage( 'transactions', { account_id: id_счёта });   ???????????
   * */
  onSelectAccount( element ) {

    if(this.element.querySelector('.active')) {
      this.element.querySelector('.active').classList.remove('active');
    }

    this.element.addEventListener('click', e => {
      if(e.target.matches('.account')) {
        e.target.classList.add('active');
      }
    })
  }

  /**
   * Возвращает HTML-код счёта для последующего
   * отображения в боковой колонке.
   * item - объект с данными о счёте
   * */
  getAccountHTML(item){
    itemObj = JSON.parse(item)
    let stringItem = `<li class="active account" data-id="35">
                        <a href="#">
                        <span>${itemObj.name}</span> /
                        <span>${itemObj.sum} ₽</span>
                        </a>
                      </li>`;

    return stringItem;
  }

  /**
   * Получает массив с информацией о счетах.
   * Отображает полученный с помощью метода
   * AccountsWidget.getAccountHTML HTML-код элемента
   * и добавляет его внутрь элемента виджета
   * */
  renderItem(data){

  }
}
