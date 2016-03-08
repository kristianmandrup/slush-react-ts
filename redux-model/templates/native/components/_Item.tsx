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
    return <View style={styles.<%= modelName %>}>
      <Text style={styles.<%= modelName %>}Text>{ this.props.label }</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  <%= modelName %>: {
  },
  <%= modelNameText %>: {
  }
});

export default <%= modelClassName %>Item;
