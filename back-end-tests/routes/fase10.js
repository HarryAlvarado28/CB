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
    console.log('Successful request! ', new Date());
    res.status(200).json({
        ok: true,
        mensaje: 'Estas en la FASE #1º - Petición realizada correctamente',
        area: [
            { 
                serie: 100,
                nombre: 'MATERIA ENERGÍA Y SUS CAMBIOS',
                titulo: [
                   {
                       serie: 110,
                       nombre: 'Aspectos Generales de la Química',
                       subtitulo: [
                           { 
                               serie: 111,
                               nombre: 'Definición',
                               contenido: 'La química es la rama de la ciencia que estudia las características y composición de todos los materiales, as! como los cambios que éstos sufren.',
                               listado: [
                                   {
                                       nombre: '',
                                       contenido: ''
                                   }
                               ]
                            },
                            {
                                serie: 112,
                                nombre: 'Áreas de la Química',
                                contenido: '',
                                listado: [
                                    {
                                        nombre: 'Química General',
                                        contenido: 'Estudia las propiedades comunes de todos los cuerpos y las leyes alas que están sometidos los cambios que en ella se efectúan.'
                                    },
                                    {
                                        nombre: 'Química Aplicada',
                                        contenido: 'Estudia las propiedades de cada una de las sustancias en particular, desde el punto de vista útil medicinal, agrícola, industrial, etc.'
                                    },
                                    {
                                        nombre: 'Química Inorgánica',
                                        contenido: 'Estudia las sustancias que provienen el reino mineral.'
                                    },
                                    {
                                        nombre: 'Química Orgánica',
                                        contenido: 'Estudia principalmente los compuestos que provienen seres vivos, animales y vegetales.'
                                    }
                                ]
                            },
                            {
                                serie: 113,
                                nombre: 'Reseña de su Evolución Histórica',
                                contenido: ''
                            },
                            {
                                serie: 113,
                                nombre: 'Relación Interdisciplinaria con otras Ciencias',
                                contenido: ''
                            }
                       ]
                   },
                   {
                       serie: 120,
                       nombre: 'Aspectos generales de la metodología científica',
                       subtitulo: [
                            { 
                                serie: 121,
                                nombre: 'Método científico y sus aplicaciones en la investigación',
                                contenido: '.'
                            },
                            {
                                serie: 122,
                                nombre: 'El Informe o Reporte Científico',
                                contenido: ''
                            },
                            {
                                serie: 123,
                                nombre: 'Magnitudes y Unidades de Medidas utilizadas en Química',
                                contenido: ''
                            }
                        ]
                   },
                   {
                       serie: 130,
                       nombre: 'Aspectos generales de la Materia',
                       subtitulo: [
                           {
                               serie: 131,
                               nombre: 'Definición',
                               contenido: ''
                           }
                       ]
                   }
                ]
            },
            {
                nombre: 'EL ÁTOMO CONSTITUYENTE FUNDAMENTAL DE LA MATERIA',
                titulo: [
                    {
                        nombre: 'Estructura Atómica y Distribución Electrónica',
                        subtitulo: [
                            { 
                                nombre: 'Reseña Histórica de los Modelos Atómicos',
                                contenido: ''
                            },
                            {
                                nombre: 'Partículas subatómicas fundamentales',
                                contenido: ''
                            },
                            {
                                nombre: 'titulotts de número atómico, número de masa, isotopos y símbolos atómicos',
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
                titulo: [
                    {
                        nombre: 'Enlace Químico',
                        subtitulo: [
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