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
    this.state = { filter: Filters.ShowAll };
  }


  render() {
    const { <%= modelPluralName %>, actions
  } = this.props;

    return <ul style= { styles.<%= modelName %>List } >
  {<%= modelPluralName %>.map(<%= modelName %> =>
          <<%= modelClassName %>Item
      key={<%= modelName %>.id}
            { ...<%= modelName %>}
            { ...actions }/>
        ) }
      </ul>
  }
}

const styles = StyleSheet.create({
  <%= modelName %>List: {
  }
});

export default <%= modelName %>List;