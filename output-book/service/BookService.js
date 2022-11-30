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
    resolve();
  });
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
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    var examples = {};
    examples['application/json'] = {
  "duration" : 247,
  "narrator" : "John Doe",
  "link" : "https://www.ivoox.com/fuego-sangre-1_md_32713232_1.mp3",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

