const {nanoId} = require('nanoid');

const addBooksHandler = (request,h) =>{
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    if(!name){
        const response = h.response({
            status: 'fail',
            message: 'gagal menambahkan buku. Mohon isi nama buku '
        })
        response.code(400);
        return response;
    }

    if (readPage > pageCount) {
        const response = h.response({
            status:fail,
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        })
        response.code(400);
        return response;
    }

    return h.response({
        status: 'success',
        message: 'buku berhasil ditambahkan',
        data:{ bookId: id,}
    })
    
}