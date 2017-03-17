import {AwwServiceName} from './service';
export const AwwCtrl = ['$scope', AwwServiceName, class AwwCtrl {
	constructor($scope, AwwService) {
		this.title = "/r/aww";
		AwwService.getPosts()
			.then(({data: {data: {children: posts}}}) => {
				$scope.posts = posts;
				console.log(posts);
			})
			.catch(console.log)
			;
	}
}];
