import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

const ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5NFB2SU5ER3pUM2s2dHo4anAiLCJleHAiOjE0NzE4MTAzMjMsImlhdCI6MTQ3MTc4ODcyMywianRpIjoidG9rXzAwMDA5QlZNTFhlUWRFOVdtMGNZazUiLCJ1aSI6InVzZXJfMDAwMDk4WW85ekFmakVKVm1MUkxqRiIsInYiOiIyIn0.HE5iO1vtqDhgRw0Bc7XvmHWTYNg54RAi8Dcv-_TQN1U`;

class Cache {
    public items = {};

    public get(item: string) {
        return this.items[item];
    }

    public put(item: string, value: any) {
        this.items[item] = value;
    }
}

@Injectable()
export class xHttp {
    private cache: Cache = new Cache();

    constructor(private http: Http) {
        this.http = http;
    }

    public get(url: string, params?) {
        return this.request('get', url, params);
    }

    public post(url: string, params?) {
        return this.request('post', url, params);
    }

    public delete(url: string, params?) {
        return this.request('delete', url, params);
    }

    public put(url: string, params?) {
        return this.request('put', url, params);
    }

    private request(method: string, url: string, params) {
        let headers = new Headers({'Authorization': `Bearer ${ACCESS_TOKEN}`});
        let options = new RequestOptions({
            headers
        });

        if (method === 'get' && params) {
            options.search = params;
        } else {
            options.body = params;
        }

        return this.http[method](`${API_BASE_URL}${url}`, options).share();
    }
}
