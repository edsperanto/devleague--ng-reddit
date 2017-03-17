import {ProgHumorServiceName} from './service';
export const ProgHumorCtrl = ['$scope', ProgHumorServiceName, class ProgHumorCtrl {
	constructor($scope, ProgHumorService) {
		this.title = "/r/programmerhumor";
		ProgHumorService.getPosts()
			.then(({data: {data: {children: posts}}}) => {
				$scope.posts = posts;
				console.log(posts);
			})
			.catch(console.log)
			;
	}
}];
