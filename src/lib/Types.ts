
export type ReviewRoom = {
    uuid: string;
    sgf: string;
    roomId: string;
    owner?: string;
    roomName?: string;
}

export type ReviewRoomInfo = {
    isOwner: boolean;
    roomId: string;
    owner: string;
    sgf: string;
}

export type ReviewRoomState = {
    roomId: string;
    cursor: number;
    branchCursor: number;
    historyCursor: number;
    history: any[];
    historySnapshots: any[];
}