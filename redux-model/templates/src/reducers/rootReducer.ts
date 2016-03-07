import { combineReducers } from 'redux';

import <%= modelPluralName %> from './<%= modelPluralName %>';

const rootReducer = combineReducers({
  <%= modelPluralName %>
});

export { rootReducer };
