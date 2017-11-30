function makeButtons(i) {
	for (i = 0; i <= 5; i++) {
		button = document.createElement('button');
		button.innerText = 'Hello!';
		button.className += 'button';
		button.style.display = 'block';
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(button);
		alert(button.innerText);
	}
}
makeButtons();


/*
Dodaj kilka elementów button do strony. Nadaj im klasę button. 
Za pomocą pętli for przejdź przez wszystkie te elementy i wyświetl tekst zawarty w każdym z nich za pomocą alert().

<button class="button">Hello!</button>
W pliku index.html dodaj kilka elementów <button> na stronie, zgodnie z powyższym schematem.

Użyj metody document.getElementsByClassName aby pobrać elementy ze strony i przypisz je do zmiennej.

Stwórz pętlę for, która wykona się tyle razy, ile jest elementów na stronie 
- przyda ci się do tego właściwość length.

Wewnątrz pętli wykonaj instrukcję, która wyświetli tekst zawarty w każdym z tych buttonów 
(użyj właściwości innerText).
*/