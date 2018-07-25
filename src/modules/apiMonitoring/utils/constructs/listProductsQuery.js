/* eslint-disable */

import faker from 'faker';

const listProductsQuery = `
query ListProductsQuery (
    $search: ProductSearchInput
)
{
    list_products(
        search: $search
    ) {
        id
        images
        name
        avg_rating
        price
        discount_price
        has_discount
        has_offer
        hot_deal
    }
}
`;

export default {
    LIST_PRODUCTS_QUERY: {
        operation: listProductsQuery,
        displayName: 'Query : List Products',
        defaultVariables: {
            search: {},
        },
    },
};
