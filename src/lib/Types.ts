
export type ReviewRoom = {
    uuid: string;
    sgf: string;
    roomId: string;
    owner?: string;
    roomName?: string;
    chatBroId?: string;
}

export type ReviewRoomInfo = {
    isOwner: boolean;
    roomId: string;
    owner: string;
    sgf: string;
    chatBroId?: string;
}

export type ReviewRoomState = {
    roomId: string;
    cursor: number;
    branchCursor: number;
    historyCursor: number;
    history: any[];
    historySnapshots: any[];
}