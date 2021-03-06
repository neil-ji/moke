import { MokeSender } from 'moke-util';
import MokeAPI from '../url';
import { IInvitationInfo, IInvitationRequest, IInvitationResponse } from "moke-model";
import { InvitationStatusType } from 'moke-enum';

const mokeSender = new MokeSender();
const mokeAPI = new MokeAPI();

const getMySendedInvitations = (id: string): Promise<IInvitationInfo[]> => {
    const url = mokeAPI.getMySendedInvitations(id);
    return mokeSender.send(url, "GET");
}

const getMyReceivedInvitations = (id: string): Promise<IInvitationInfo[]> => {
    const url = mokeAPI.getMyReceivedInvitations(id);
    return mokeSender.send(url, "GET");
}

const updateMyReceivedInvitationStatus = (
    id: string,
    status: InvitationStatusType
): Promise<void> => {
    const url = mokeAPI.updateMyReceivedInvitationStatus(id, status);
    return mokeSender.send(url, "GET");
}

const cancelMySendedInvitation = (id: string): Promise<void> => {
    const url = mokeAPI.cancelMySendedInvitation(id);
    return mokeSender.send(url, "GET");
}

const sendInvitation = (data: IInvitationRequest): Promise<IInvitationResponse> => {
    const {
        from,
        to,
        description,
        ref
    } = data;
    const url = mokeAPI.sendInvitation(from, ref);
    return mokeSender.send(url, "POST", { description, to });
}

export default {
    getMyReceivedInvitations,
    getMySendedInvitations,
    updateMyReceivedInvitationStatus,
    cancelMySendedInvitation,
    sendInvitation,
}