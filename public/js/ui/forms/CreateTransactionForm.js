// const { response } = require("express");

/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) { 
    super(element);

    this.element = element;

    console.log(element)

    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {

    const dataUser = JSON.parse(localStorage.user);

      const data = {
        email: dataUser.email,
        password: dataUser.password,
      };
    
    const callback = (err, response) => {
      if(response.success) {

        response.data.forEach( el => {
          const option = document.createElement('option');
          option.setAttribute('value', `${el.id}`);
          option.textContent = `${el.name}`;

          if(this.element.querySelector('#income-accounts-list') && (this.element[3].length != response.data.length)) {
            this.element[3].append(option)
          }
          else if(this.element.querySelector('#expense-accounts-list') && (this.element[3].length != response.data.length)) {
            this.element[3].append(option)
          };
        });
      };
      // здесь будет обновление выпадающего списка, есть 2 формы обновлять нужно в обеих
    }

    Account.list(data, callback)
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {

  }
}