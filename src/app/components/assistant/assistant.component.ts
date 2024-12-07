import { Component, ViewChild } from '@angular/core';
import { AssistantNamespace } from '../../interfaces/assistant.namespace';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-assistant',
    imports: [CommonModule],
    templateUrl: './assistant.component.html',
    styleUrl: './assistant.component.scss'
})
export class AssistantComponent {
    @ViewChild('userInput')
    public userInput: any;

    public messages: AssistantNamespace.MessageInterface[] = [
        {
            text: 'Hello, how can I help you?',
            isAssistant: true,
        },
        {
            text: 'hey I want to log my breakfast',
            isAssistant: false,
        },
        {
            text: 'Sure thing! What did you eat?',
            isAssistant: true,
        },
        {
            text: 'I had two eggs and a cup of coffee.',
            isAssistant: false,
        },
    ];

    constructor() {}

    public sendMessage() {
        const userValue = this.userInput.nativeElement.value;
        console.log('sendMessage = ', { userValue });
    }
}
