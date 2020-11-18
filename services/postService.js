export class PostService {
    _url = 'https://jsonplaceholder.typicode.com';
    _urlSomeUserPost = 'https://jsonplaceholder.typicode.com/posts'

    getAllPosts() {
        return fetch(`${this._url}/posts`).then(value => value.json())
    }
    getSomePost(id) {
        return fetch(`${this._url}/posts/${id}`).then(value => value.json())
    }
    getSomeUserPost(id) {
        return fetch (`${this._urlSomeUserPost}/?userId=${id}`).then(value => value.json())
    }
}
