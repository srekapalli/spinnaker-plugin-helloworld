import { customStage  } from './CustomStage'

const plugin = {
  name: 'spinnaker-sample-plugin',
  initialize: function(pluginApi: any) {
    console.log('init');
    pluginApi.registerStage(customStage);
  }
};

export { plugin };
