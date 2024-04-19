let express = require('express')

let usuarios ={lista: [
  {
    id: 1,
    email: "email1@gmail.com",
    user: "usuario1",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46982347,
    foto_perfil: "/images/users/b8566174a0dfa98437920797ceb02f7a.jpg",
    seguidores: 5
  },
  {
    id: 2,
    email: "email2@gmail.com",
    user: "usuario2",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46678933,
    foto_perfil: "/images/users/images-1.jpg",
    seguidores: 7
  },
  {
    id: 3,
    email: "email3@gmail.com",
    user: "usuario3",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46786312,
    foto_perfil: "/images/users/images.jpg",
    seguidores: 25
  },
  {
    id: 4,
    email: "email4@gmail.com",
    user: "usuario4",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 45679768,
    foto_perfil: "/images/users/Austin.webp",
    seguidores: 7
  },
  {
    id: 5,
    email: "email5@gmail.com",
    user: "usuario5",
    fecha_nacimiento: "2005-06-29 00:00:00",
    dni: 46873423,
    foto_perfil: "/images/users/Tyrone.webp",
    seguidores: 0
  },
]};

module.exports = usuarios