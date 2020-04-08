import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Orders from '~/pages/Orders';

import Deliverymen from '~/pages/Deliverymen';
import DeliverymenForm from '~/pages/Deliverymen/DeliverymenForm';

import Recipients from '~/pages/Recipients';
import OrderProblems from '~/pages/OrderProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" component={Orders} isPrivate />

      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/register"
        component={DeliverymenForm}
        isPrivate
      />

      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/order-problems" component={OrderProblems} isPrivate />
    </Switch>
  );
}
