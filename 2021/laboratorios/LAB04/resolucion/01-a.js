db.noticias.insertOne({  'titulo': '�La escuela no contagia? Las 20 verdades sobre las clases presenciales',
                        'epigrafe': 'Un resumen fundamental de todas las investigaciones internacionales sobre el tema',
                        'subtitulo': 'Axel Rivas, director de la Escuela de Educaci�n de la Universidad de San Andr�s, realiz� una sintesis que pone en crisis el discurso del Gobierno porte�o para politizar el debate sobre las medidas de cuidado y boicotear los esfuerzos destinados a frenar la escalada de contagios.',
                        'cuerpo': '"La escuela no contagia", repite cada vez que puede el jefe de Gobierno porte�o Horacio Rodr�guez Larreta. Y agrega terminante: "Nosotros nos basamos en datos". Las dos afirmaciones quedan fuertemente en duda si se atiende a la extensa lista de investigaciones, realizadas en todo el mundo, sobre el impacto de la educaci�n presencial en el marco de la pandemia de Covid 19.'
                        })

db.noticias.insertMany([
                    {   'titulo': 'Coronavirus: se registraron 248 muertes y 20.461 nuevos casos',
                        'epigrafe': 'Los n�meros de la segunda ola',
                        'subtitulo': 'Los fallecidos desde el comienzo de la pandemina suman 59.476. La ocupaci�n de camas de terapia intensiva a nivel nacional es de 65,8% y en el AMBA del 74,5%.',
                        'cuerpo': 'El Ministerio de Salud de la Naci�n inform� esta tarde que en las �ltimas 24 horas se reportaron 20.461 nuevos contagios y 248 muertes por Covid-19, con lo cual el total acumulado de casos en el pa�s se elev� a 2.714.475 y el de v�ctimas fatales a 59.476.'},
                    {   'titulo': 'La Corte se declar� competente en el conflicto por las clases presenciales',
                        'epigrafe': 'El m�ximo tribunal ya notific� a las partes',
                        'cuerpo': 'La Corte Suprema de Justicia resolvi� este lunes que el planteo del gobierno de la Ciudad de Buenos Aires contra el decreto de necesidad y urgencia de la Naci�n que suspendi� las clases presenciales por dos semanas en el AMBA es de "competencia originaria" de ese tribunal.'},
                    {  'titulo': 'Se equivocaron, le depositaron 1,2 millones de d�lares y se neg� a devolverlos',
                        'epigrafe': 'Termin� presa y acusada de robo: un caso del que habla todo Estados Unidos',
                        'cuerpo': 'Un error en una transferencia bancaria termin� generando un revuelo en Nueva Orleans, Estados Unidos: una mujer recibi� por equivocaci�n m�s de 1,2 millones de d�lares y se neg� a devolverlos, por lo que termin� detenida y acusada de robo, fraude bancario y transmisi�n ilegal de fondos monetarios.'},
                    {  'titulo': 'La derecha brasile�a fracas�',
                       'cuerpo': 'La derecha brasile�a siempre control� el poder en Brasil, desde que comenz� a imponerse a los pueblos ind�genas, oprimirlos y explotar sus riquezas. Luego, cuando utiliz� el fen�meno m�s monstruoso de la historia mundial, la esclavitud, que con el colonialismo, son los dos fen�menos fundacionales de la historia brasile�a.'}
                    ])