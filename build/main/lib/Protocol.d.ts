export interface ProtocolDef {
    type: 'gtp' | 'sys';
    data: any;
}
export declare class Protocol {
    static readonly sys: {
        requestAI: string;
        enterRoom: string;
    };
}
