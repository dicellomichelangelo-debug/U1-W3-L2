  /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

      const changeTitle = function () {
        const title= document.getElementById('titolo')
        title.innerText='un titolo'
      }
      changeTitle()
      /* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

      const addClassToTitle = function () {
        const classe= document.getElementById('titolo')
        classe.classList.add('test')
      }
      addClassToTitle()

      /* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

      const changePcontent = function () {
        const pCon= document.querySelectorAll('div p')
        for(i=0;i<pCon.length;i++){
            pCon[i].innerText= 'giorgiovanni'
        }
      }
      changePcontent()

      /* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

      const changeUrls = function () {
        const ancore= document.querySelectorAll('div a')
        for(i=0;i<ancore.length;i++){

            ancore[i].setAttribute('href', 'https://www.google.com')
        }
      }
      changeUrls()

      /* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

      const addToTheSecond = function () {
        const lista= document.getElementById('secondList')
        lista.innerHTML= `
        <li>1st</li>
        <li>2nd</li>
        <li>3rd</li>
        <li>4rd</li>`
      }
      addToTheSecond()

      /* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

      const addParagraph = function () {
        const newP= document.createElement('p')
        newP.innerText = `nuovo paragrafo`
        const contenitore=document.querySelector('body div:nth-of-type(1)')
        contenitore.appendChild(newP)
      }
      addParagraph()

      /* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

      const hideFirstUl = function () {
        const pri= document.getElementById('firstList')
        pri.remove()
      }
      hideFirstUl()

      /* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

      const paintItGreen = function () {
        const ulBg= document.querySelectorAll('ul')
        for(i=0;i<ulBg.length;i++){
           ulBg[i].style.backgroundColor= 'green' 
        }
      }
      paintItGreen()

      /* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

      const makeItClickable = function () {
        const title= document.querySelector('h1')
        title.onclick= function(){
        const testo= title.innerText
        title.innerText=testo.slice(0, -1)
        }
      }
      makeItClickable()

      /* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

      const revealFooterLink = function () {
        const footer= document.querySelector('footer')
        footer.onclick= function(){
            const a=document.querySelector('footer a')
            alert(a.innerText)
        }
      }
      revealFooterLink()

      /* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

      const generateTable = function () {}

      /* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

      const addRow = function () {}

      /* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

      const hideAllImages = function () {}

      /* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

      const changeColorWithRandom = function () {}