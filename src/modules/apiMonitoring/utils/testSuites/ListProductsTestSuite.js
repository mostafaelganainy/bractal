
import { expect } from 'chai';
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
              assert: 'custom',
              func: response => expect(response.list_products)
                .to.be.an('array')
                .that.has.deep.property('id')
                .and.has.deep.property('name')
                .and.has.deep.property('images')
                .and.has.deep.property('avg_rating')
                .and.has.deep.property('price')
                .and.has.deep.property('discount_price')
                .and.has.deep.property('has_discount')
                .and.has.deep.property('has_offer')
                .and.has.deep.property('hot_deal'),
            },
          ],
        },
      ],
    },
  ],
};
