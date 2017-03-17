import angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import '../style/app.css';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl, AwwService, AwwServiceName} from './aww';
import {MechKeyState, MechKeyCtrl, MechKeyService, MechKeyServiceName} from './mechanicalkeyboards';
import {ProgHumorState, ProgHumorCtrl, ProgHumorService, ProgHumorServiceName} from './programmerhumor';
import './default/index';

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
};

/*
class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}
*/

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
	.config(($stateProvider) => {
		$stateProvider
			.state(DefaultState.name, DefaultState)
			.state(AwwState.name, AwwState)
			.state(MechKeyState.name, MechKeyState)
			.state(ProgHumorState.name, ProgHumorState)
			;
	})
	.run(($state) => {
		$state.go('Default');
	})
  .directive('app', app)
	.service(AwwServiceName, AwwService)
	.service(MechKeyServiceName, MechKeyService)
	.service(ProgHumorServiceName, ProgHumorService)
	.controller('DefaultCtrl', DefaultCtrl)
	.controller('AwwCtrl', AwwCtrl)
	.controller('MechKeyCtrl', MechKeyCtrl)
	.controller('ProgHumorCtrl', ProgHumorCtrl)
  // .controller('AppCtrl', AppCtrl)
	;

export default MODULE_NAME;
