import faker from 'faker';

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
              assert: 'fieldsExist',
              params: [
                'list_products.id',
                'list_products.name',
                'list_products.images',
              ],
            },
          ],
        },
      ],
    },
  ],
};
