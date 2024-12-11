import { Component, ElementRef, ViewChild } from '@angular/core';
import { AssistantNamespace } from '../../interfaces/assistant.namespace';
import { CommonModule } from '@angular/common';
import { AssistantService } from '../../services/assistant/assistant.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
    selector: 'app-assistant',
    imports: [
        CommonModule,
    ],
    templateUrl: './assistant.component.html',
    styleUrl: './assistant.component.scss'
})
export class AssistantComponent {
    @ViewChild('userInput')
    public userInput: ElementRef = {} as ElementRef;

    @ViewChild('messagesContainer')
    public messagesContainer: ElementRef = {} as ElementRef;

    public messages: AssistantNamespace.MessageInterface[] = [
        {
            text: 'Hello, how can I help you?',
            isAssistant: true,
        },
    ];

    constructor(
        private _assistantService: AssistantService,
        private readonly markdownService: MarkdownService,
    ) { }

    public sendMessage() {
        const userValue = this.userInput.nativeElement.value;

        this.messages.push({
            text: userValue,
            isAssistant: false,
        });

        this.userInput.nativeElement.value = '';
        this._showLoadingMessage();
        this._scrollToBottomSmooth();

        this._getAssistantResponse(userValue);
    }

    private _getAssistantResponse(userValue: string): void {
        this._assistantService
            .getAssistantResponse(userValue)
            .subscribe((response: any) => {
                this._hideLoadingMessage();
                this.messages.push({
                    text: this.markdownService.parse(response.friendlyMessage) as string,
                    isAssistant: true,
                });
                this._scrollToBottomSmooth();
            });
    }

    private _scrollToBottomSmooth(): void {
        // Because messages are added dynamically we need the set timeout to force a reflow
        setTimeout(
            () => this.messagesContainer.nativeElement.scroll({
                top: this.messagesContainer.nativeElement.scrollHeight,
                behavior: 'smooth',
            }),
            0
        );
    }

    private _showLoadingMessage(): void {
        this.messages.push({
            text: '...',
            isAssistant: true,
            isLoading: true,
        });
    }

    private _hideLoadingMessage(): void {
        this.messages.pop();
    }
}
