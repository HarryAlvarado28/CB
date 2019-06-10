var express = require('express');

var app = express();

app.get('/', (req, res, next) => {
  console.log('Successful request!');
  res.status(200).json({
    ok: true,
    mensaje: 'Estas en la FASE #1º - Petición realizada correctamente'
  });
});

app.get('/data', (req, res, next) => {
    console.log('Successful request!');
    res.status(200).json({
        ok: true,
        mensaje: 'Estas en la FASE #1º - Petición realizada correctamente',
        area: [
            { 
                nombre: 'MATERIA ENERGÍA Y SUS CAMBIOS',
                concepto: [
                   {
                       nombre: 'Aspectos Generales de la Química',
                       titulo: [
                           { 
                               nombre: 'Definición',
                               contenido: 'La química es la rama de la ciencia que estudia las características y composición de todos los materiales, as! como los cambios que éstos sufren.'
                            },
                            {
                                nombre: 'Áreas de la Química',
                                contenido: ''
                            },
                            {
                                nombre: 'Reseña de su Evolución Histórica',
                                contenido: ''
                            },
                            {
                                nombre: 'Relación Interdisciplinaria con otras Ciencias',
                                contenido: ''
                            }
                       ]
                   },
                   {
                       nombre: 'Aspectos generales de la metodología científica',
                       titulo: [
                            { 
                                nombre: 'Método científico y sus aplicaciones en la investigación',
                                contenido: '.'
                            },
                            {
                                nombre: 'El Informe o Reporte Científico',
                                contenido: ''
                            },
                            {
                                nombre: 'Magnitudes y Unidades de Medidas utilizadas en Química',
                                contenido: ''
                            }
                        ]
                   },
                   {
                       nombre: 'Aspectos generales de la Materia',
                       titulo: [
                           {
                               nombre: 'Definición',
                               contenido: ''
                           }
                       ]
                   }
                ]
            },
            {
                nombre: 'EL ÁTOMO CONSTITUYENTE FUNDAMENTAL DE LA MATERIA',
                concepto: [
                    {
                        nombre: 'Estructura Atómica y Distribución Electrónica',
                        titulo: [
                            { 
                                nombre: 'Reseña Histórica de los Modelos Atómicos',
                                contenido: ''
                            },
                            {
                                nombre: 'Partículas subatómicas fundamentales',
                                contenido: ''
                            },
                            {
                                nombre: 'Conceptos de número atómico, número de masa, isotopos y símbolos atómicos',
                                contenido: ''
                            },
                            {
                                nombre: 'Antecedentes históricos de la tabla periódica',
                                contenido: ''
                            },
                            {
                                nombre: 'Relación de las propiedades de los átomos en la ubicación de los elementos en la tabla periódica actual (radio atómico e iónico, electronegatividad, energía de ionización, afinidad electrónica)',
                                contenido: ''
                            }
                        ]
                    }
                ]
            },
            {
                nombre: 'ENLACE QUÍMICO Y ESTADOS DE AGREGACIÓN DE LA MATERIA',
                concepto: [
                    {
                        nombre: 'Enlace Químico',
                        titulo: [
                            {
                                nombre: 'Definición',
                                contenido: ''
                            },
                            {
                                nombre: 'Relación entre enlace químico, electrones de valencia, Símbolos de Lewis, Regla del Octeto y Regla del Duplete',
                                contenido: ''
                            },
                            {
                                nombre: 'Clasificación del enlace químico',
                                contenido: ''
                            }
                        ]
                    }
                ]
            }
        ]

    });
});

module.exports = app;