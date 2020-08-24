const responseForm = {
    success: function (res, data) {
        const responseObj = {
            isSuccess: true,
            status: 200,
            data: data
        }
        res.json(responseObj);
    },
    error: function (res, err) {
        const responseObj = {
            isSuccess: false,
            status: 500,
            data: err
        }
        res.json(responseObj);
    },
    pagination: ({ query }, res, data) => {
        const page = Number(query.page);
        const limit = Number(query.limit);
        const prevPage =
            page === 1 ? "" : `/pagination?page=${page - 1}&limit=${limit}`;
        const nextPage = `/pagination?page=${page + 1}&limit=${limit}`;
        const responseObject = {
            success: true,
            status: 200,
            data,
            pageInfo: {
                currentPage: query.page,
                limit: query.limit,
                prevPage,
                nextPage,
            },
        };
        res.json(responseObject);
    },
    paginationSearchSort: ({ query }, res, data) => {
        const page = Number(query.page);
        const limit = Number(query.limit);
        const prevPage =
            page === 1 ? "" : `/pagination?page=${page - 1}&limit=${limit}`;
        const nextPage = `/pagination?page=${page + 1}&limit=${limit}`;
        const responseObject = {
            success: true,
            status: 200,
            data,
            pageInfo: {
                currentPage: query.page,
                limit: query.limit,
                prevPage,
                nextPage,
            },
        };
        res.json(responseObject);
    }
}

module.exports = responseForm;