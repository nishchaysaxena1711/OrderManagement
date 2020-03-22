import { handleActions } from 'redux-actions'

export const OrderStore = {
    orders: []
}

export default handleActions({
    INSERT_NEW_ORDER: (state, { payload }) => (state.orders.push(payload), state)
}, OrderStore)
