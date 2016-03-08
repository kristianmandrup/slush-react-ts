import { expect } from 'chai';

import { <%= modelClassName %> } from '../../models/<%= modelPluralName %>';
import <%= modelPluralName %> from '../<%= modelPluralName %>';

import {
  ADD_<%= modelConstName %>,
} from '../../constants/<%= modelPluralName %>';

describe('<%= modelName %> reducer', () => {
  it('handles add', () => {
    let state: <%= modelClassName %>[] = [{ id: 0, text: '', completed: true }];

    state = <%= modelPluralName %>(state, {
      type: ADD_ <%= modelConstName %>,
      payload: { text: 'hello', completed: false }
    });

    expect(state[0]).to.eql(
      { id: 1, text: 'hello', completed: false }
    );
  });
});
