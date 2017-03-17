import {AwwServiceName} from './service';
export const AwwCtrl = ['$scope', AwwServiceName, class AwwCtrl {
	constructor($scope, AwwService) {
		this.title = "/r/aww";
		AwwService.getPosts()
			.then(({data: {data: {children: posts}}}) => {
				$scope.posts = posts
					.filter(({data: {preview}}) => preview)
					.filter(({data: {thumbnail}}) => thumbnail != 'self' && thumbnail != 'default')
					.map(post => {
						post.data.preview.images[0].source.url = 
							post.data.preview.images[0].source.url.split('&amp;').join('&');
						return post;
					});
			})
			.catch(console.log)
			;
	}
}];
