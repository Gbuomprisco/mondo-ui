import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

class Cache {
    public items = {};

    public get(item: string): Observable<any> {
        return this.items[item];
    }

    public put(item: string, value: any) {
        this.items[item] = Observable.of(value);
    }
}

@Injectable()
export class XHttp {
    public cache: Cache = new Cache();

    constructor(private http: Http) {}

    public get(url: string, params?): Observable<any> {
        return this.cache.get(url) || this.request('get', url, params);
    }

    public post(url: string, params?): Observable<any> {
        return this.request('post', url, params);
    }

    public delete(url: string, params?): Observable<any> {
        return this.request('delete', url, params);
    }

    public put(url: string, params?): Observable<any> {
        return this.request('put', url, params);
    }

    private request(method: string, url: string, params): Observable<any> {
        let ACCESS_TOKEN = localStorage.getItem('access_token'),
            headers = new Headers({'Authorization': `Bearer ${ACCESS_TOKEN}`}),
            options = new RequestOptions({
                headers
            });

        if (method === 'get' && params) {
            options.search = params;
        } else {
            options.body = params;
        }

        return this.http[method](`${process.env.API_BASE_URL}${url}`, options).
            share().
            map(data => data.json());
    }
}
