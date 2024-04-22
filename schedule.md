* creare css base:
    - reset rules
    - color root
    - layout
    - paragraph and title style

* dividere struttura tra header, main e footer

* iniziare sviluppo HEADER:
    - prima sezione semplice con dati di contatto divisi con space between
    - seconda sezione a tre con centrale in flex growth:
        - logo
        - menu list che prende gli elementi dinamicamente da una props, inclusi i valori esposti da menu a tendina dei songoli elementi
        - tasti utiliti: cerca, carrello e ordina ora (button-sm)

* iniziare sviluppo MAIN:
    - szione HERO:
        - container-lg con immagine cover
        - container-sm contenuto nel precedente con titolazione e due tasti (button-round)
    - sezione di BRAND PRESENTATION:
        - container-sm
        - row con due column (50-50): una titolazione e una di paragrafo
        - gallery interattiva
    - sezione PRODUCT:
        - container-md
        - row con titolazione
        - blocco di 8 card prodotto divise in due righe
            - card da generare con ciclo for prendendo i dati da una props
            - card oggetti composti da:
                - immagine
                - nome
                - prezzo
                - badge sconto
                - eventuale prezzo scontato
                - tasti hover: wishlist, carrello e più info
        - tasto per andare a tutti i prodotti (button-round)
    - sezione QUOTE:
        - container-sm
        - immagine virgolette
        - paragrafo della citazione
        - nome autore e posizione lavorativa
    - sezione COMBO:
        - due card di offerte combo
        - card da generare con ciclo for prendendo i dati da una props
        - card oggetti composti da:
            - immagine (background)
            - titolo/nome che include il prezzo
            - scritta CTA
            - immagine bollino sconto
    - sezione DATA:
        - container-lg per lo sfondo
        - container-sm per 4 dati statici su singola row (con png divisoria)
    - sezione TRENDING:
        - container-sm
        - titolazione
        - riga da 4 card:
            - stesse card della sezione prodotti
            - effetto ombra come contorno delle card (tutta la card verticale, non solo la foto)
    - sezione CTA:
        - container-md con immagine sfondo
        - titolazione piccola
        - titolazione principale
        - paragrafo
        - due tasti (button-block): wathsapp e appuntamenti
    - sezione NEWS:
        - container-sm
        - titolazione con immagine sfondo
        - row con tre card news
        - card da generare con ciclo for prendendo i dati da una props
        - card oggetti composti da:
            - immagine
            - data con icon: autore e data
            - titolazione
            - paragrafo anteprima articolo
            - tasto read more
    - sezione PARTNERS:
        - container-sm
        - row con 5 loghi dei partner
        - compilazione dinamica con ciclo for e loghi forniti da props

* iniziare sviluppo FOOTER:
    - sezione NEWSLETTER:
        - container-sm con sfondo
        - row con titolazione e input text per inserire la propria mail (provare ad inserire avviso se una mail viene inserita male)
    - sezione RECAP:
        - container-lg con sfondo
        - contaiiner-sm
        - row composta da 4 blocchi:
            - blocco statico con logo, slogan e tasti social
            - blocco dinamico con titolazione e lista di link in colonna
            - blocco dinamico con titolazione e due anteprime del blog
            - blocco dinamico con titolazione e 6 immagine da gallery
    - sezione BOTTOM:
        - semplice con dati di copiryght e servizi divisi con space between

* ultimare con un css più dettagliato dove ce n'è bisogno

* testare elementi dinamici e di hover