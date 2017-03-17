import angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import '../style/app.css';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl} from './aww';
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
			;
	})
	.run(($state) => {
		$state.go('Default');
	})
  .directive('app', app)
	.controller('DefaultCtrl', DefaultCtrl)
	.controller('AwwCtrl', AwwCtrl)
  // .controller('AppCtrl', AppCtrl)
	;

export default MODULE_NAME;
