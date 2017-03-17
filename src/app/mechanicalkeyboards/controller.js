import {MechKeyServiceName} from './service';
export const MechKeyCtrl = ['$scope', MechKeyServiceName, class MechKeyCtrl {
	constructor($scope, MechKeyService) {
		this.title = "/r/mechanicalkeyboards";
		MechKeyService.getPosts()
			.then(({data: {data: {children: posts}}}) => {
				$scope.posts = posts
					.filter(({data: {preview}}) => preview)
					.filter(({data: {thumbnail}}) => thumbnail != 'self' && thumbnail != 'default')
					.map(post => {
						post.data.preview.images[0].source.url = 
							post.data.preview.images[0].source.url.split('amp;').join('&');
						return post;
					});
				console.log(posts);
			})
			.catch(console.log)
			;
	}
}];
