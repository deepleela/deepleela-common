
export interface ProtocolDef {
    type: 'gtp' | 'sys' | 'sync',
    data: { id?: number, name: string, args?: any[] } | string;
}

export class Protocol {

    static readonly sys = {
        requestAI: 'requestAI',
        loadMoves: 'loadMoves',
        createReviewRoom: 'createReviewRoom',
        enterReviewRoom: 'enterReviewRoom',
        leaveReviewRoom: 'leaveReviewRoom',
        reviewRoomStateUpdate: 'reviewRoomStateUpdate',
        reviewRoomMessage: 'reviewRoomMessage',
        enterAIRoom: 'enterRoom',
        idleAI: 'idleAI',
    }

}