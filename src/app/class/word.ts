export class Word {
    originalPresentation : string;
    baseWord : string;
    isStopWord : boolean = false;

    constructor(originalPresentation : string, baseWord : string) {
        this.originalPresentation = originalPresentation;
        this.baseWord = baseWord;
    }
}