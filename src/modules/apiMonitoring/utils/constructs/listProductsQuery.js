/* eslint-disable */

import faker from 'faker';

const listProductsQuery = `
query ListProductsQuery (
    $where: ProductSearchInput
)
{
    list_products(
        where: $where
    ) {
        id
        name
        images
    }
}
`;

export default {
    LIST_PRODUCTS_QUERY: {
        operation: listProductsQuery,
        displayName: 'Query : List Products',
        defaultVariables: {
            where: {},
        },
    },
};
