import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Trans } from 'react-i18next';

export default function ProductCard() {
  return (
    <Card>
      <Image src="/assets/images/avatar/large/matthew.png" />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="#!">
          <Icon name="user" />
          22 
          {/* <Trans i18nKey="friends" />  */}
        </a>
      </Card.Content>
    </Card>
  );
}
