

Conociendo R a partir de EDA
========================================================
autosize: true
width: 1200
height: 800

Herramientas de An�lisis Exploratorio
<br />
<br />
Santiago Banchero
<br />
Leo Lucianna
<br />
Juan Manuel Fernandez

<br />
Miner�a de Datos - UBA


Sobre la Herramienta
========================================================
R es un lenguaje de programaci�n con un enfoque al an�lisis estad�stico.

R es software libre y es uno de los lenguajes mas utilizados en investigaci�n por la comunidad estad�stica y miner�a de datos.

<center>
![plot of chunk unnamed-chunk-1](./images/R-logo.jpg)
</center>

Se distribuye bajo la licencia GNU GPL. Est� disponible para los sistemas operativos Unix y GNU/Linux, Windows & Macintosh.
<br />
<br />
[1] https://www.r-project.org/
<br />
[2] https://www.rstudio.com/

Sobre los datos
========================================================
Un dataset consiste en una representaci�n de un conjunto de hechos/individuos a trav�s de un conjunto de caracter�sticas.

Para describir un dataset se analizan esas caracter�sticas (variables) y sus relaciones.

Las variables, a grandes rasgos pueden ser:
- Cualitativas/Discretas. 
- Cuantitativas/Continuas.

Es importante conocer los tipos de datos, dado que ello nos permite decidir que tipo de an�lisis utilizar.

Sobre el enfoque
========================================================
El an�lisis de datos exploratorio (EDA) tiene por objetivo identificar las principales caracter�sticas de un conjunto de datos mediante un n�mero reducido de gr�ficos y/o valores.

Consiste en:
- Medidas cuantitativas de resumen: M�tricas que explican propiedades del dataset.
- Visualizaci�n de datos: transformaciones a un formato visual que permita identificar las caracter�sticas y relaciones entre los elementos del dataset.

Sobre el dataset para la demostraci�n
========================================================
<small>
Iris: 150 instancias de flores de la planta iris en sus variedades:
- Setosa,
- Versicolor,
- Virginica.

Las caracteristicas son:

```r
data(iris)
names(iris)
```

```
[1] "Sepal.Length" "Sepal.Width"  "Petal.Length" "Petal.Width"  "Species"     
```
</small>

***
<center>

```r
pie(table(iris$Species), main="Cantidad por especie")
```

![plot of chunk unnamed-chunk-3](02-EDA-figure/unnamed-chunk-3-1.png)
</center>
***

Empezamos: Cargando el dataset
========================================================
autosize: true
<small>
Podemos cargar el dataset de, al menos, dos maneras:
- Gr�fica

<center>
![plot of chunk unnamed-chunk-4](./images/load.png)
</center>

***
- Por C�digo

```r
library(readr)
getwd()
```

```
[1] "C:/Users/unlu/Documents/GitHub/dm-uba/2021/Practicos/LAB01/presentacion"
```

```r
#iris <- read_csv("C:/Users/Usuario/Google Drive/PC-Juan/Docencia  & Investigacion/Docencia/Mineria de Datos-UBA/iris.csv")
```
</small>
***
Los datasets ser�n contenidos en un dato de tipo Data.Frame...

Nuestro Tipo de dato estrella: el Data.Frame
========================================================
autosize: true
<small>
El dataframe es una estructura de datos similar a la matriz, a diferencia que puede tener columnas con diferentes tipos de datos:

```r
str(iris)
```

```
'data.frame':	150 obs. of  5 variables:
 $ Sepal.Length: num  5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...
 $ Sepal.Width : num  3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...
 $ Petal.Length: num  1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...
 $ Petal.Width : num  0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...
 $ Species     : Factor w/ 3 levels "setosa","versicolor",..: 1 1 1 1 1 1 1 1 1 1 ...
```
Es la estructura de datos mas utilizada por su versatilidad y potencia. Podemos cargar datasets a partir de distintos tipos de archivos o podemos crearlas a partir de la conjunci�n de listas/arrays con la funci�n data.frame().
</small>

el Data.Frame - Accediendo a los datos
========================================================
autosize:true
<small>
Accedemos por Atributo/Columna:

```r
iris$Sepal.Length[1:5]
```

```
[1] 5.1 4.9 4.7 4.6 5.0
```

```r
iris[1:5,1]
```

```
[1] 5.1 4.9 4.7 4.6 5.0
```
Accedemos por Instancia/Fila:

```r
iris[3,1:3]
```

```
  Sepal.Length Sepal.Width Petal.Length
3          4.7         3.2          1.3
```

```r
iris[2,-c(4,5)]
```

```
  Sepal.Length Sepal.Width Petal.Length
2          4.9           3          1.4
```
***
Seleccionamos Instancias que cumplen una condici�n:


```r
iris[iris$Species=="setosa" & iris$Sepal.Length>5.2,3:4]
```

```
   Petal.Length Petal.Width
6           1.7         0.4
11          1.5         0.2
15          1.2         0.2
16          1.5         0.4
17          1.3         0.4
19          1.7         0.3
21          1.7         0.2
32          1.5         0.4
34          1.4         0.2
37          1.3         0.2
49          1.5         0.2
```
</small>

Actualizando el Data.Frame (ABM)
========================================================
autosize:true
<small>
Podemos AGREGAR una instancia o un conjunto de instancias:

```r
nuevas.filas<-data.frame(Sepal.Length=5, Sepal.Width=5, Petal.Length=5, Petal.Width=5, Species="Data Mining")
iris<-rbind(iris, nuevas.filas)
```
Podemos MODIFICAR una instancia o un conjunto de instancias:


```r
iris[1,1:4]=c(4.4,4.4,4.4,4.4)
```

```r
iris[iris$Species=="setosa",1:4]=iris[iris$Species=="setosa",1:4]*5
```
Podemos ELIMINAR una instancia o un conjunto de instancias:

```r
iris<-iris[-c(1:5),]
```
</small>

Conociendo el dataset... y los datos!
========================================================
autosize: true
<small>
Deciamos que para describir un dataset se analizan sus variables y las relaciones entre ellas.
<br />
<br />
<strong>
Nos interesa la distribuci�n de la variable, que est� determinada por los valores que toma esa variable y la frecuencia con la que los toma.
A tener en cuenta: 
- Posici�n, 
- Dispersi�n,
- Forma.
</strong>
<br />
<br />
Vemos los tipos de variables y un resumen de los valores:


```r
str(iris)
```

```
'data.frame':	150 obs. of  5 variables:
 $ Sepal.Length: num  5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...
 $ Sepal.Width : num  3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...
 $ Petal.Length: num  1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...
 $ Petal.Width : num  0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...
 $ Species     : Factor w/ 3 levels "setosa","versicolor",..: 1 1 1 1 1 1 1 1 1 1 ...
```
</small>

Conociendo el dataset (++)
========================================================

Vemos el objeto y sus instancias:

```r
View(iris) # Instancias del dataset
```

Mas datos:

```r
summary(iris)
```

```
  Sepal.Length    Sepal.Width     Petal.Length    Petal.Width   
 Min.   :4.300   Min.   :2.000   Min.   :1.000   Min.   :0.100  
 1st Qu.:5.100   1st Qu.:2.800   1st Qu.:1.600   1st Qu.:0.300  
 Median :5.800   Median :3.000   Median :4.350   Median :1.300  
 Mean   :5.843   Mean   :3.057   Mean   :3.758   Mean   :1.199  
 3rd Qu.:6.400   3rd Qu.:3.300   3rd Qu.:5.100   3rd Qu.:1.800  
 Max.   :7.900   Max.   :4.400   Max.   :6.900   Max.   :2.500  
       Species  
 setosa    :50  
 versicolor:50  
 virginica :50  
                
                
                
```

Ahora vamos a estudiar el dataset...
========================================================

Decimos que nos interesa la distribuci�n de la variable, que est� determinada por los valores que toma esa variable y la frecuencia con la que los toma. Las herramientas son:
- Posici�n: medidas de tendencia central y gr�ficos (torta, barras & histogramas),
- Dispersi�n: medidas de dispersi�n (rangos, percentiles & desv�o estandar) y gr�ficos (boxplot, scatterplot),
- y en consecuencia su forma.

Tambi�n nos interesa la relaci�n entre las variables:
- Asociaci�n: medidas de asociaci�n (correlaci�n & covarianza) y gr�ficos (scatterplot & coordenadas paralelas)

Medidas de Posici�n
========================================================

Entre las medidas de posici�n mas conocidas se encuentran:
- Media aritm�tica: Valor promedio entre los valores observados.
- Moda: Valor que mas se repite entre las observaciones.
- Mediana: Valor que divide al medio a las observaciones.

<center>












































```
Error in knitr::include_graphics("./images/posicion.png") : 
  Cannot find the file(s): "./images/posicion.png"
```
