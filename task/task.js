import axios from 'axios';

const baseUrl = axios.create({
	baseURL: 'https://books.danit.com.ua',
});
const form = document.getElementById('add-book-form');

form.addEventListener('submit', async function(ev) {
	ev.preventDefault();
	let title = form.querySelector('[name="book-name]').value;
	let author = form.querySelector('[book-author]').value;
	let isbn = form.querySelector('[book-isbn]').value;

	const data = await baseUrl.post('/books', {
		headers: {
			Authorization: '20b5177badd6',
		},
		body: {
			name: title,
			author: author,
			isbn: isbn,
		},
	});
	console.log(data);
});
