import * as React from 'react';

import { <%= modelClassName %> } from '../models/<%= modelPluralName %>';

interface <%= modelClassName %>ItemProps {
  <%= modelName %>: <%= modelClassName %>;
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
    return <View>
      <Text style={styles.<%= modelName %>}>{ this.props.<%= modelName %>.label }</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  <%= modelName %>: {
  }
});

export default <%= modelClassName %>Item;
