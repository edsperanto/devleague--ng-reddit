import {MechKeyServiceName} from './service';
export const MechKeyCtrl = ['$scope', MechKeyServiceName, class MechKeyCtrl {
	constructor($scope, MechKeyService) {
		this.title = "/r/mechanicalkeyboards";
		MechKeyService.getPosts()
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
