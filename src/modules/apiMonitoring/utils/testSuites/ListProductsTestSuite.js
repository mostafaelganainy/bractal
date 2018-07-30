
import chai from 'chai';
import chaiThings from 'chai-things';
import GraphQlConstructs from '../GraphqlConstructs';

chai.should();
chai.use(chaiThings);

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
              func: response => response.list_products
                .should.all.have.property('id')
                .and.all.have.property('name')
                .and.all.have.property('images')
                .and.all.have.property('avg_rating')
                .and.all.have.property('price')
                .and.all.have.property('discount_price')
                .and.all.have.property('has_discount')
                .and.all.have.property('has_offer')
                .and.all.have.property('hot_deal'),
            },
          ],
        },
      ],
    },
  ],
};
