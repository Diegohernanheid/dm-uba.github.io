// Todas las posiciones 1
db.getCollection('charts').find({Position: 1})

// Otra forma de hacerlo (poco expresiva)
db.getCollection('charts').find({Position: {$lt: 2}})

// Ahora tambi�n filtramos el a�o 2019 (cuidado, en este caso las fechas est�n guardadas como texto)
db.charts.find( { $and: [ 
                        { Position: 1 }, 
                        { week_start: {$regex: "^2019.*"}}
                        ]
                 })