import * as React from 'react';

import { <%= modelClassName %> } from '../../flux/models/<%= modelName %>';
import <%= modelClassName %>Item from './<%= modelClassName %>Item';

import {
  Filters
} from '../../flux/constants/<%= modelPluralName %>';

const <%= modelConstName %>_FILTERS = {
  [Filters.ShowAll]: () => true,
};

interface <%= modelClassName %>ListProps {
  <%= modelName %>: <%= modelClassName %>[];
  actions: any;
};
interface <%= modelClassName %>ListState {
  filter: string;
};


class <%= modelClassName %>List extends React.Component < <%= modelClassName %>ListProps, <%= modelClassName %>ListState > {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const mock<%= modelClassName %>List = ['row 1', 'row 2'];

    this.state = {
      dataSource: ds.cloneWithRows(mock<%= modelClassName %>List),
      filter: Filters.ShowAll
    };
  }


  render() {
    const { <%= modelPluralName %>, actions
  } = this.props;

    return <ListView style={styles.<%= modelName %>List}
              dataSource={this.state.dataSource}
              renderRow={(data) => _renderRow(data)}>
           </ListView>;
  }

  _renderRow(data) {
    return <<%= modelClassName %>Item {...data}/>;
  }
}

const styles = StyleSheet.create({
  <%= modelName %>List: {
  }
});

export default <%= modelName %>List;