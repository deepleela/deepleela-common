
export interface ProtocolDef {
    type: 'gtp' | 'sys',
    data: { id?: number, name: string, args?: any[] } | string;
}

export class Protocol {

    static readonly sys = {
        requestAI: 'requestAI',
        enterRoom: 'enterRoom',
        loadSgf: 'loadsgf',
        idleAI: 'idleAI',
    }

}