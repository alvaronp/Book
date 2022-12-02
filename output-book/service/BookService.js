'use strict';


/**
 * Deletes a book
 * delete a book
 *
 * bookId Long Book id to delete
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
      "audiobook" : {
        "duration" : 247,
        "narrator" : "John Doe",
        "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
        "status" : "available"
      },
      "author" : "George R.R. Martin",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      }, {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      } ],
      "name" : "Fire & Blood",
      "genre" : "Fantasy",
      "bookId" : 1,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha#/media/Archivo:Title_page_first_edition_Don_Quijote.jpg",
      "audiobook" : {
        "duration" : 374,
        "narrator" : "Albalearning",
        "link" : "https://albalearning.com/audiolibros/cervantes/quijote.html",
        "status" : "available"
      },
      "author" : "Miguel de Cervantes",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.3,
          "comment" : "Un clásico de 10",
          "username" : "Juan P"
        }
      } ],
      "name" : "Don Quijote de la Mancha",
      "genre" : "Adventure",
      "bookId" : 2,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Il%C3%ADada#/media/Archivo:Homer_Ilias_Griphanius_c1572.jpg",
      "audiobook" : {
        "duration" : 168,
        "narrator" : "Mario Martínez",
        "link" : "https://www.ivoox.com/audiolibro-la-iliada-homero-voz-humana-audios-mp3_rf_47219693_1.html",
        "status" : "available"
      },
      "author" : "Homero",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.8,
          "comment" : "Me encanta",
          "username" : "Marta G"
        }
      } ],
      "name" : "Ilíada",
      "genre" : "Poetry",
      "bookId" : 3,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad#/media/Archivo:Cien_a%C3%B1os_de_soledad.png",
      "audiobook" : {
        "duration" : 258,
        "narrator" : "bedrooms",
        "link" : "https://www.ivoox.com/podcast-cien-anos-soledad-voz-humana-natural_sq_f1430432_1.html",
        "status" : "available"
      },
      "author" : "Gabriel García Márquez",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.5,
          "comment" : "Me encanta",
          "username" : "Alfredo A"
        }
      } ],
      "name" : "100 años de Soledad",
      "genre" : "Drama",
      "bookId" : 4,
      "status" : "available"
    }];
    if (bookId >= 1 & bookId <= 4) {
      resolve(["LIBRO "+ bookId +" ELIMINADO: \n", examples[bookId-1]]);
    } else {
      reject("No existen libros para borrar con ese ID");
    }  });
}

function getAuthorFromAllBooks(author, examples){
  var i = 0;
  var list = [];
  while (i < examples.length){
    // look for the entry with a matching `code` value
    if (examples[i].author == author){
      list.push(examples[i])
    }
    i++;
  }
  return list;
}

/**
 * Finds books filtered by author
 * Multiple author values can be provided with comma separated strings
 *
 * author String Author name that need to be considered for filter
 * returns List
 **/
exports.findBooksByAuthor = function(author) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
      "audiobook" : {
        "duration" : 247,
        "narrator" : "John Doe",
        "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
        "status" : "available"
      },
      "author" : "George R.R. Martin",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      }, {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      } ],
      "name" : "Fire & Blood",
      "genre" : "Fantasy",
      "bookId" : 1,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha#/media/Archivo:Title_page_first_edition_Don_Quijote.jpg",
      "audiobook" : {
        "duration" : 374,
        "narrator" : "Albalearning",
        "link" : "https://albalearning.com/audiolibros/cervantes/quijote.html",
        "status" : "available"
      },
      "author" : "Miguel de Cervantes",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.3,
          "comment" : "Un clásico de 10",
          "username" : "Juan P"
        }
      } ],
      "name" : "Don Quijote de la Mancha",
      "genre" : "Adventure",
      "bookId" : 2,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Il%C3%ADada#/media/Archivo:Homer_Ilias_Griphanius_c1572.jpg",
      "audiobook" : {
        "duration" : 168,
        "narrator" : "Mario Martínez",
        "link" : "https://www.ivoox.com/audiolibro-la-iliada-homero-voz-humana-audios-mp3_rf_47219693_1.html",
        "status" : "available"
      },
      "author" : "Homero",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.8,
          "comment" : "Me encanta",
          "username" : "Marta G"
        }
      } ],
      "name" : "Ilíada",
      "genre" : "Poetry",
      "bookId" : 3,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad#/media/Archivo:Cien_a%C3%B1os_de_soledad.png",
      "audiobook" : {
        "duration" : 258,
        "narrator" : "bedrooms",
        "link" : "https://www.ivoox.com/podcast-cien-anos-soledad-voz-humana-natural_sq_f1430432_1.html",
        "status" : "available"
      },
      "author" : "Gabriel García Márquez",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.5,
          "comment" : "Me encanta",
          "username" : "Alfredo A"
        }
      } ],
      "name" : "100 años de Soledad",
      "genre" : "Drama",
      "bookId" : 4,
      "status" : "available"
    }];
    var results = getAuthorFromAllBooks(author, examples);
    if (results.length > 0) {
      resolve(results);
    } else {
      reject();
    }
  });
}


function getGenreFromAllBooks(genre, examples){
  var i = 0;
  var list = [];
  while (i < examples.length){
    // look for the entry with a matching `code` value
    if (examples[i].genre == genre){
      list.push(examples[i])
    }
    i++;
  }
  return list;
}

/**
 * Finds books filtered by genre
 * Multiple genre values can be provided with comma separated strings
 *
 * genre String Genre values that need to be considered for filter
 * returns List
 **/
exports.findBooksByGenre = function(genre) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
      "audiobook" : {
        "duration" : 247,
        "narrator" : "John Doe",
        "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
        "status" : "available"
      },
      "author" : "George R.R. Martin",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      }, {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      } ],
      "name" : "Fire & Blood",
      "genre" : "Fantasy",
      "bookId" : 1,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha#/media/Archivo:Title_page_first_edition_Don_Quijote.jpg",
      "audiobook" : {
        "duration" : 374,
        "narrator" : "Albalearning",
        "link" : "https://albalearning.com/audiolibros/cervantes/quijote.html",
        "status" : "available"
      },
      "author" : "Miguel de Cervantes",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.3,
          "comment" : "Un clásico de 10",
          "username" : "Juan P"
        }
      } ],
      "name" : "Don Quijote de la Mancha",
      "genre" : "Adventure",
      "bookId" : 2,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Il%C3%ADada#/media/Archivo:Homer_Ilias_Griphanius_c1572.jpg",
      "audiobook" : {
        "duration" : 168,
        "narrator" : "Mario Martínez",
        "link" : "https://www.ivoox.com/audiolibro-la-iliada-homero-voz-humana-audios-mp3_rf_47219693_1.html",
        "status" : "available"
      },
      "author" : "Homero",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.8,
          "comment" : "Me encanta",
          "username" : "Marta G"
        }
      } ],
      "name" : "Ilíada",
      "genre" : "Poetry",
      "bookId" : 3,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad#/media/Archivo:Cien_a%C3%B1os_de_soledad.png",
      "audiobook" : {
        "duration" : 258,
        "narrator" : "bedrooms",
        "link" : "https://www.ivoox.com/podcast-cien-anos-soledad-voz-humana-natural_sq_f1430432_1.html",
        "status" : "available"
      },
      "author" : "Gabriel García Márquez",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.5,
          "comment" : "Me encanta",
          "username" : "Alfredo A"
        }
      } ],
      "name" : "100 años de Soledad",
      "genre" : "Fantasy",
      "bookId" : 4,
      "status" : "available"
    }];
    var genres = getGenreFromAllBooks(genre, examples);
    if (genres.length > 0) {
      resolve(genres);
    } else {
      reject();
    }
  });
}


/**
 * Get audiobook by bookId
 * Returns book's audiobook if exists
 *
 * bookId Long ID of book to get its audiobook
 * returns Audiobook
 **/
exports.getAudioBookById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
        "duration" : 247,
        "narrator" : "John Doe",
        "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
        "status" : "available"
    }, {
        "duration" : 374,
        "narrator" : "Albalearning",
        "link" : "https://albalearning.com/audiolibros/cervantes/quijote.html",
        "status" : "available"
      },{
        "duration" : 168,
        "narrator" : "Mario Martínez",
        "link" : "https://www.ivoox.com/audiolibro-la-iliada-homero-voz-humana-audios-mp3_rf_47219693_1.html",
        "status" : "available"
      },{
        "duration" : 258,
        "narrator" : "bedrooms",
        "link" : "https://www.ivoox.com/podcast-cien-anos-soledad-voz-humana-natural_sq_f1430432_1.html",
        "status" : "available"
      }];
      if (bookId >= 1 & bookId <= 4) {
        resolve(["AUDIOLIBRO "+ bookId +" OBTENIDO: \n", examples[bookId-1]]);
      } 
      else {
        reject("No existen audiolibros para ese libro o el libro no existe");
      }
   });
}

/**
 * Get a book to read it and see info
 * Get a book to read it and see info
 *
 * bookId Long Book id to read and see info
 * returns Book
 **/
exports.getBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "coverUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Fire_%26_Blood_%282018%29_hardcover.jpg/220px-Fire_%26_Blood_%282018%29_hardcover.jpg",
      "audiobook" : {
        "duration" : 247,
        "narrator" : "John Doe",
        "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
        "status" : "available"
      },
      "author" : "George R.R. Martin",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      }, {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      } ],
      "name" : "Fire & Blood",
      "genre" : "Fantasy",
      "bookId" : 1,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha#/media/Archivo:Title_page_first_edition_Don_Quijote.jpg",
      "audiobook" : {
        "duration" : 374,
        "narrator" : "Albalearning",
        "link" : "https://albalearning.com/audiolibros/cervantes/quijote.html",
        "status" : "available"
      },
      "author" : "Miguel de Cervantes",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.3,
          "comment" : "Un clásico de 10",
          "username" : "Juan P"
        }
      } ],
      "name" : "Don Quijote de la Mancha",
      "genre" : "Adventure",
      "bookId" : 2,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Il%C3%ADada#/media/Archivo:Homer_Ilias_Griphanius_c1572.jpg",
      "audiobook" : {
        "duration" : 168,
        "narrator" : "Mario Martínez",
        "link" : "https://www.ivoox.com/audiolibro-la-iliada-homero-voz-humana-audios-mp3_rf_47219693_1.html",
        "status" : "available"
      },
      "author" : "Homero",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.8,
          "comment" : "Me encanta",
          "username" : "Marta G"
        }
      } ],
      "name" : "Ilíada",
      "genre" : "Poetry",
      "bookId" : 3,
      "status" : "available"
    }, {
      "coverUrl" : "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad#/media/Archivo:Cien_a%C3%B1os_de_soledad.png",
      "audiobook" : {
        "duration" : 258,
        "narrator" : "bedrooms",
        "link" : "https://www.ivoox.com/podcast-cien-anos-soledad-voz-humana-natural_sq_f1430432_1.html",
        "status" : "available"
      },
      "author" : "Gabriel García Márquez",
      "ratings" : [ {
        "rating" : {
          "rate" : 4.5,
          "comment" : "Me encanta",
          "username" : "Alfredo A"
        }
      } ],
      "name" : "100 años de Soledad",
      "genre" : "Drama",
      "bookId" : 4,
      "status" : "available"
    }];
    if (bookId >= 1 & bookId <= 4) {
      resolve(["LIBRO "+ bookId +" OBTENIDO: \n", examples[bookId-1]]);
    } 
    else {
      reject("El libro de ID" + bookId + "no existe");
    }
  });
}


/**
 * Get book rating
 * Returns average rating of a book
 *
 * bookId Long ID of book to see rating
 * returns Book
 **/
exports.getRatingById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples  = [ {
      "ratings" : [ {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      }, {
        "rating" : {
          "rate" : 4.7,
          "comment" : "I loved it!",
          "username" : "John"
        }
      } ],
    }, {
      "ratings" : [ {
        "rating" : {
          "rate" : 4.3,
          "comment" : "Un clásico de 10",
          "username" : "Juan P"
        }
      } ],
    }, {
      "ratings" : [ {
        "rating" : {
          "rate" : 4.8,
          "comment" : "Me encanta",
          "username" : "Marta G"
        }
      } ],
    }, {
      "ratings" : [ {
        "rating" : {
          "rate" : 4.5,
          "comment" : "Me encanta",
          "username" : "Alfredo A"
        }
      }],
    }];
    if (bookId >= 1 & bookId <= 4) {
      resolve(["RESEÑAS DEL LIBRO DE ID "+ bookId +" OBTENIDO: \n", examples[bookId-1]]);
    } 
    else {
      reject("El libro de ID" + bookId + "no existe");
    }
  });
}


/**
 * Update an existing book
 * Update an existing book by Id
 *
 * body Book Update an existing book in the app
 * returns Book
 **/
exports.updateBook = function(body) {
  const book = body;
  return new Promise(function(resolve, reject) {
    var examples = {
      "coverUrl" : book.coverUrl,
      "audiobook" : book.audiobook,
      "author" : book.author,
      "ratings" : book.ratings,
      "name" : book.name,
      "genre" : book.genre,
      "bookId" : book.bookId,
      "status" : book.status
    };
    if (book.bookId >= 1 && book.bookId <= 4) {
      resolve(examples);
    } else {
      reject("No es posible modificar el ID del libro");
    }
  });
}


/**
 * Upload a new book to Bookify
 * Add a new book to Bookify
 *
 * body Book Create a new book in the app
 * returns Book
 **/
exports.uploadBook = function(body) {
  const book = body;
  return new Promise(function(resolve, reject) {
    var examples = {
      "coverUrl" : book.coverUrl,
      "audiobook" : book.audiobook,
      "author" : book.author,
      "ratings" : book.ratings,
      "name" : book.name,
      "genre" : book.genre,
      "bookId" : book.bookId,
      "status" : book.status
    };
    if (book.bookId > 4) {
      resolve(examples);
    } else {
      reject("Ya existe un libro con ese ID");
    }
  });
}


