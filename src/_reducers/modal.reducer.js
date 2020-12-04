import { modalConstants } from '../_constants';

const initialState = { show: false, element: null };

export function modal(state = initialState, action) {
  switch (action.type) {
    case modalConstants.SHOW_MODAL:
      document.querySelector('body').style.overflow = 'hidden';
      return {
        show: true,
        element: action.payload,
      };
    case modalConstants.DROP_MODAL:
      document.querySelector('body').removeAttribute('style');
      return {
        show: false,
        element: null,
      };
    default:
      return state
  }
}