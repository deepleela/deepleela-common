export interface ProtocolDef {
    type: 'gtp' | 'sys';
    data: {
        id?: number;
        name: string;
        args?: any[];
    } | string;
}
export declare class Protocol {
    static readonly sys: {
        requestAI: string;
        enterRoom: string;
        loadMoves: string;
        idleAI: string;
    };
}
