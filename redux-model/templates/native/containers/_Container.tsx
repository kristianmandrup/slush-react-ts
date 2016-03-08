import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { <%= modelClassName %>List } from '../components/<%= modelClassName %>List';
import * as <%= modelClassName %>Actions from '../../flux/actions/<%= modelPluralName %>';
import { <%= modelClassName %> } from '../../flux/models/<%= modelPluralName %>';

interface <%= modelClassName %>Props {
  <%= modelPluralName %>: <%= modelClassName %>[];
  dispatch: Dispatch;
}

class <%= modelClassName %>Container extends React.Component < <%= modelClassName %>Props, void> {
  render() {
    const { <%= modelPluralName %>, dispatch
  } = this.props;
  const actions = bindActionCreators(<%= modelClassName %>Actions, dispatch);

  return <<%= modelClassName %>List>
  <%= modelPluralName %>={ <%= modelPluralName %> }
          actions={actions}/>
      </<%= modelClassName %>List>
    );
  }
}

const mapStateToProps = state => ({
  <%= modelPluralName %>: state.<%= modelPluralName %>
});

export default connect(mapStateToProps)(<%= modelClassName %>Container);
