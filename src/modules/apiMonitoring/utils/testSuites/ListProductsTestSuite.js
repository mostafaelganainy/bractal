
import GraphQlConstructs from '../GraphqlConstructs';

export default {
  name: 'List Products',
  tests: [
    {
      name: 'Happy Path',
      steps: [
        {
          name: 'List Products',
          construct: GraphQlConstructs.LIST_PRODUCTS_QUERY,
          postAssertions: [
            {
              assert: '',
              params: [
                'list_products[].id',
                'list_products[].name',
                'list_products[].images',
                'list_products[].avg_rating',
                'list_products[].price',
                'list_products[].discount_price',
                'list_products[].has_discount',
                'list_products[].has_offer',
                'list_products[].hot_deal',
              ],
            },
          ],
        },
      ],
    },
  ],
};
