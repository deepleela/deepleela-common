
export interface ProtocolDef {
    type: 'gtp' | 'sys',
    data: { id?: number, name: string, args?: any[] } | string;
}

export class Protocol {

    static readonly sys = {
        requestAI: 'requestAI',
        loadMoves: 'loadMoves',
        createReviewRoom: 'createReviewRoom',
        enterReviewRoom: 'enterReviewRoom',
        leaveReviewRoom: 'leaveReviewRoom',
        enterAIRoom: 'enterRoom',
        idleAI: 'idleAI',
    }

}