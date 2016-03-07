import * as React from 'react';

import { <%= modelClassName %> } from '../models/<%= modelName %>';
import <%= modelClassName %>Item from './<%= modelClassName %>Item';

import {
  SHOW_ALL
} from '../constants/Filters';

const <%= modelConstName %>_FILTERS = {
  [SHOW_ALL]: () => true,
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
    this.state = { filter: SHOW_ALL };
  }


  render() {
    const { <%= modelPluralName %>, actions
  } = this.props;

    return <ListView style= { styles.<%= modelName %>List } >
  {<%= modelPluralName %>.map(<%= modelName %> =>
          <<%= modelClassName %>Item
      key={<%= modelName %>.id}
          <%= modelName %> = {<%= modelName %>}
            { ...actions }/>
        ) }
      </ListView>
  }
}

const styles = StyleSheet.create({
  <%= modelName %>List: {
  }
});

export default <%= modelName %>List;