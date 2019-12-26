import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={1} expensesTotal={30200} />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary expensesCount={3} expensesTotal={90500} />,
  );
  expect(wrapper).toMatchSnapshot();
});
