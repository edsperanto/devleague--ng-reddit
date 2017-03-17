import {ProgHumorServiceName} from './service';
export const ProgHumorCtrl = ['$scope', ProgHumorServiceName, class ProgHumorCtrl {
	constructor($scope, ProgHumorService) {
		this.title = "/r/programmerhumor";
		ProgHumorService.getPosts()
			.then(({data: {data: {children: posts}}}) => {
				$scope.posts = posts
					.filter(({data: {preview}}) => preview)
					.filter(({data: {thumbnail}}) => thumbnail != 'self' && thumbnail != 'default');
				console.log(posts);
			})
			.catch(console.log)
			;
	}
}];
