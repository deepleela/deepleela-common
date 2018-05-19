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
        loadMoves: string;
        createReviewRoom: string;
        enterReviewRoom: string;
        leaveReviewRoom: string;
        reviewRoomStateUpdate: string;
        enterAIRoom: string;
        idleAI: string;
    };
}
