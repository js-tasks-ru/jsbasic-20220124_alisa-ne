/* eslint-disable indent */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
	constructor(rows) {
		this.rows = rows;
		this.elem = this.render();
	}

	render() {
		this.table = document.createElement('TABLE');
		this.table.insertAdjacentHTML('afterBegin', 
			`<thead>
				<tr>
					<th>Имя</th>
					<th>Возраст</th>
					<th>Зарплата</th>
					<th>Город</th>
					<th></th>
				</tr>
    		</thead>
			<tbody>
			</tbody>`);
		
		this.tbody = this.table.querySelector('tbody');

		for (const row of this.rows) {
			this.tbody.insertAdjacentHTML('beforeEnd', 
			`<tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button class='btn'>X</button></td>
        </tr>`);
		}
		
		this.buttons = this.table.querySelectorAll('.btn');

		for (const btn of this.buttons) {
		btn.addEventListener('click', this.onClick);
		}

		return this.table;

	}

	onClick(event) {
		const row = event.target.closest('tr');

		if (row) {
			row.remove();
			}
		}
	}
