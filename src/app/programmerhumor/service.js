export const ProgHumorServiceName = 'ProgHumorService';
export const ProgHumorService = [
	'$http',
	class ProgHumorService {

		constructor($http) {
			this.$http = $http;
			this.endpoint = 'https://www.reddit.com/r/programmerhumor.json';
			this.posts = 'testing';
		}

		getPosts() {
			return this.$http.get(this.endpoint);
		}

	}
];
