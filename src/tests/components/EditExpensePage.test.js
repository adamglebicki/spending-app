import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage'

let startEditExpensePage, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpensePage = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.js }
    wrapper = shallow(
        <EditExpensePage
            startEditExpensePage={startEditExpensePage}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[2]}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpensePage', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpensePage).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})