export interface ProtocolDef {
    type: 'gtp' | 'sys' | 'sync';
    data: {
        id?: number;
        name: string;
        args?: any[];
    } | string;
}
export declare class Protocol {
    static readonly sys: {
        requestAI: string;
        loadMoves: string;
        createReviewRoom: string;
        enterReviewRoom: string;
        joinReviewRoom: string;
        leaveReviewRoom: string;
        reviewRoomStateUpdate: string;
        reviewRoomMessage: string;
        enterAIRoom: string;
        idleAI: string;
    };
}
