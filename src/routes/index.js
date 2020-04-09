import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Orders from '~/pages/Orders';

import Deliverymen from '~/pages/Deliverymen';
import DeliverymenNew from '~/pages/Deliverymen/new';
import DeliverymenEdit from '~/pages/Deliverymen/edit';

import Recipients from '~/pages/Recipients';
import RecipientsNew from '~/pages/Recipients/new';

import OrderProblems from '~/pages/OrderProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" component={Orders} isPrivate />

      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route path="/deliverymen/new" component={DeliverymenNew} isPrivate />
      <Route
        path="/deliverymen/edit/:id"
        component={DeliverymenEdit}
        isPrivate
      />

      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/new" component={RecipientsNew} isPrivate />

      <Route path="/order-problems" component={OrderProblems} isPrivate />
    </Switch>
  );
}
