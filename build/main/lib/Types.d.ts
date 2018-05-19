export declare type ReviewRoom = {
    uuid: string;
    sgf: string;
    roomId: string;
    nickname?: string;
    roomName?: string;
};
export declare type ReviewRoomInfo = {
    isOwner: boolean;
    roomId: string;
    owner: string;
    sgf: string;
};
export declare type ReviewRoomState = {
    roomId: string;
    cursor: number;
    variation: any[];
};
