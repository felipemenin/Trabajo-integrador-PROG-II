let express = require('express')

let usuarios = [
  {
    id: 1,
    email: "email1@gmail.com",
    user: "usuario1",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46982347,
    foto_perfil: null,
  },
  {
    id: 2,
    email: "email2@gmail.com",
    user: "usuario2",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46678933,
    foto_perfil: null,
  },
  {
    id: 3,
    email: "email3@gmail.com",
    user: "usuario3",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46786312,
    foto_perfil: null,
  },
  {
    id: 4,
    email: "email4@gmail.com",
    user: "usuario4",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 45679768,
    foto_perfil: null,
  },
  {
    id: 5,
    email: "email5@gmail.com",
    user: "usuario5",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46873423,
    foto_perfil: null,
  },
];

module.exports = usuarios