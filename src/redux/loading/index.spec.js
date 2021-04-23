// ./**tests**/loading.js
import configureMockStore from 'redux-mock-store'
import { LOADING } from './types';

// In a real application we would import this from our actions
const setLoading = (payload) => ({
  type: LOADING,
  payload
});

// Create a mock store
const mockStore = configureMockStore()
const store = mockStore({})
describe('action creators', () => {
  it('creates LOADING when loading was successful', () => {
    // Dispatch the setLoading action with the values of a new to-do.
    store.dispatch(setLoading(false));
    expect(store.getActions()).toMatchSnapshot();
  });
});