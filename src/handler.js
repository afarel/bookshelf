const { nanoId } = require('nanoid');
const { books } = require('./books');

// kriteria 3
const addBooksHandler = (request, h) => {
    const {
        name, year, author, summary, publisher, pageCount, readPage, reading,
    } = request.payload;
    const id = nanoId(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    if (!name) {
        return h.response({
            status: 'fail',
            message: 'gagal menambahkan buku. Mohon isi nama buku ',
        }).code(400);
    }

    if (readPage > pageCount) {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
    };
    books.push(newBook);

    return h.response({
        status: 'success',
        message: 'buku berhasil ditambahkan',
        data: { bookId: id },
    }).code(201);
};

// kriteria 4
const getAllBooksHandler = (request, h) => {
    const booksResponse = books.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));

    return h.response({
        status: 'success',
        data: {
            books: booksResponse,
        },
    }).code(200);
};

// kriteria 5
const getBooksByIdHandler = (request, h) => {
    const { id } = request.params;
    const book = books.find(n => n.id === id);

    if (book !== undefined) {
        return h.respponse({
            status: 'success',
            data: {
                book,
            },
        }).code(200);
    }

    return h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    }).code(404);
};

module.exports = {
    addBooksHandler,
    getAllBooksHandler,
    getBooksByIdHandler,
};
