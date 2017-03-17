export const MechKeyServiceName = 'MechKeyService';
export const MechKeyService = [
	'$http',
	class MechKeyService {

		constructor($http) {
			this.$http = $http;
			this.endpoint = 'https://www.reddit.com/r/mechanicalkeyboards.json';
			this.posts = 'testing';
		}

		getPosts() {
			return this.$http.get(this.endpoint);
		}

	}
];
