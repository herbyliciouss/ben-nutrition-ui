import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AssistantService {
    private _baseUrl: string | undefined;

    constructor(
        private _http: HttpClient,
    ) { }

    public getAssistantResponse(message: string) {
        this._baseUrl = 'http://localhost:3018';
        const encodedMessage = encodeURIComponent(message);
        return this._http.get(`${this._baseUrl}/calories?userInput=${encodedMessage}`);
    }
}
