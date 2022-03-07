document.querySelector('body').insertAdjacentHTML(
	'beforeend',
	`
	<div id="result-page" class="wrapper result-page">
	<header class="header">
		<div class="result-page__close">&#x2715</div>	
		<div class="header__row header__container">
			<div class="header__logo">
				<svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-40.446 -22.19 350.532 133.14"><path d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/><path d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/><path d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/><path d="M224.64 2.53v65h-9.5v-65z" fill="#34A853"/><path d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/><path d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z" fill="#4285F4"/></svg>
			</div>
			<div class="header__search search">
				<form id="search-form" class="search__form" action="">
					<input class="search__input" type="text" name="search-value" autofocus="autofocus" value="" />
					<span class="search__form-border"></span>
					<button class="search__button" type="submit">
						<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
							></path>
						</svg>
					</button>
				</form>
			</div>
		</div>
	</header>
	<div class="result-stats">
		<div class="result-stats__container">
			<span class="result-stats__title"></span>
			<span class="result-stats__of-about"></span>
			<span class="result-stats__of-seconds"></span>
		</div>
	</div>

	<main class="page">

		<section class="page__row page__container">
			<div class="page__body result-body">
				<div class="result-body__content">

				</div>
			</div>
			<div class="page__more more">
				<ul class="more__items">
					<li class="more__item active">0</li>
					<li class="more__item">1</li>
					<li class="more__item">2</li>
					<li class="more__item">3</li>
					<li class="more__item">4</li>
				</ul>
			</div>
		</section>
	</main>
	<footer class="footer">
		<div class="footer__row footer__container">
			<div class="footer__item">
				&#169; Copyright 2022 - For
				<a href="https://kunde-ssystems.de" class="footer__link">
					kunde-ssystems.de
				</a>
			</div>
		</div>
	</footer>
	</div>
	
`
)

const apiKey = 'AIzaSyBLlqr-NeS-brQ9s-aHUfKQqJ_SRuWcyVk'

async function searchRequest(searchValie) {
	let curButtonValue
	if (sessionStorage.getItem('curPage')) {
		curButtonValue = JSON.parse(sessionStorage.getItem('curPage'))
	}
	const newsUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=017576662512468239146:omuauf_lfve&q=${searchValie}&start=${curButtonValue || 0}&num=10`

	const response = await fetch(newsUrl)
	try {
		const searchValue = await response.json()
		if (searchValue.error) {
			document.querySelector('.result-body__content').innerHTML = `<span style="color:red;">${searchValue.error.message}</span>`
		} else {
			getStats(searchValue)
			searchValue.searchInformation.totalResults !== '0' ? searchRender(searchValue.items) : nothingFound()

			sessionStorage.setItem('searchValue', JSON.stringify(searchValue))
		}
	} catch (er) {
		console.error(er.message)
	}
}

function getStats(searchValue) {
	document.querySelector('.result-stats__title').innerText = `${searchValue.queries.request[0].title}`
	document.querySelector('.result-stats__of-about').innerText = `Of about ${searchValue.searchInformation.formattedTotalResults}`
	document.querySelector('.result-stats__of-seconds').innerText = `results (${searchValue.searchInformation.formattedSearchTime} seconds)`
	console.log(searchValue.queries.request)
}

const searchItemToHtml = searchItem => `
	<div class="result-body__item">
		<h3 class="result-body__title">
			<a href="https://${searchItem.displayLink}" target="_blank">
				${searchItem.htmlTitle}
			</a>
		</h3>
		<a href="https://${searchItem.displayLink}" class="result-body__link" target="_blank">
			${searchItem.displayLink}
		 </a>
		<p class="result-body__description">
			${searchItem.htmlSnippet}
		</p>
	</div>
`

function searchRender(searchItems) {
	document.querySelector('.result-body__content').innerHTML = searchItems.map(searchItemToHtml).join('')
}

function getFormValue() {
	const searchForm = document.getElementById('search-form')
	searchForm.addEventListener('submit', e => {
		e.preventDefault()
		let currentValue = searchForm.querySelector('[name="search-value"]').value
		if (currentValue) {
			let curPage = 0
			sessionStorage.setItem('curPage', JSON.stringify(curPage))
			clearActive()
			searchRequest(currentValue)
			addMoreActive(currentValue)
		}
	})
}
getFormValue()

function getBlockFormValue() {
	document.querySelector('body').addEventListener('submit', e => {
		if (e.target.id === 'search') {
			e.preventDefault()
			let currentValue = e.target.querySelector('[name="search-block-value"]').value
			if (currentValue) {
				let curPage = 0
				sessionStorage.setItem('curPage', JSON.stringify(curPage))
				searchRequest(currentValue)
				clearActive()
				document.getElementById('result-page').classList.add('show')
				document.querySelector('body').classList.add('_lock')
				document.querySelector('[name="search-value"]').value = currentValue
				addMoreActive(currentValue)
			}
		}
	})
}
getBlockFormValue()

function nothingFound() {
	document.querySelector('.result-body__content').innerHTML = 'Not found...'
}

function closeResulpPage() {
	const buttonClose = document.querySelector('.result-page__close')
	buttonClose.addEventListener('click', e => {
		e.preventDefault()
		document.getElementById('result-page').classList.remove('show')
		document.querySelector('body').classList.remove('_lock')
	})
}
closeResulpPage()

function clearActive() {
	const moreItems = document.querySelectorAll('.more__item')
	moreItems.forEach(item => item.classList.remove('active'))
}

function addMoreActive(currentValue) {
	const moreItems = document.querySelectorAll('.more__item')
	moreItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			clearActive()
			e.target.classList.add('active')
			let curPage = +item.innerText * 10 + 1
			sessionStorage.setItem('curPage', JSON.stringify(curPage))
			searchRequest(currentValue)
		})
	})
}
