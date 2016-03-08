import * as React from 'react';

import { <%= modelClassName %> } from '../../flux/models/<%= modelPluralName %>';

interface <%= modelClassName %>ItemProps {
  label: string;
}
interface <%= modelClassName %>ItemState {
  editing: boolean;
};

class <%= modelClassName %>Item extends React.Component <<%= modelClassName %>ItemProps, <%= modelClassName %>ItemState > {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  render() {
    return <li>
      <div style={styles.<%= modelName %>}>{ this.props.label }</div>
    </li>
  }
}

const styles = StyleSheet.create({
  <%= modelName %>: {
  }
});

export default <%= modelClassName %>Item;
