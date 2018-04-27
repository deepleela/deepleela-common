
export interface ProtocolDef {
    type: 'gtp' | 'sys',
    data: any;
}

export class Protocol {

    static readonly sys = {
        requestAI: 'requestAI',
        enterRoom: 'enterRoom',
    }
    
}