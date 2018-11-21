import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CardDeck,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4 text-capitalize">Choose your plan</h1>
        <p className="lead">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <Container>
        <CardDeck className="mb-3 text-center">
          <Card className="mb-4 shadow-sm">
            <CardHeader>
              <h4 className="my-0 font-weight-normal">Free</h4>
            </CardHeader>
            <div className="card-body">
              <h2 className="card-title pricing-card-title">
                €0 <small className="text-muted">/ mo</small>
              </h2>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Basic Features</li>
                <li>Can create up to 5 recipes weekly </li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <Button
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </Button>
            </div>
          </Card>
          <Card className="mb-4 shadow-sm">
            <CardHeader>
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </CardHeader>
            <CardBody>
              <h2 className="card-title pricing-card-title">
                €9.99 <small className="text-muted">/ mo</small>
              </h2>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <Button
                className="btn btn-lg btn-block btn-primary"
              >
                Get started
              </Button>
            </CardBody>
          </Card>
          <Card className="mb-4 shadow-sm">
            <CardHeader>
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </CardHeader>
            <CardBody>
              <h2 className="card-title pricing-card-title">
                €19.99 <small className="text-muted">/ mo</small>
              </h2>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <Button
                className="btn btn-lg btn-block btn-primary"
              >
                Contact us
              </Button>
            </CardBody>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

Pricing.PropTypes = {

}

export default Pricing;
