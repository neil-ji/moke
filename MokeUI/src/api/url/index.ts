import { InvitationStatusType } from "moke-enum";

export default class MokeAPI {
    public baseURL = "http://localhost";

    public login = () => {
        return this.baseURL + "/user/login";
    }

    public isLogin = () => {
        return this.baseURL + "/user/isLogin";
    }

    public register = () => {
        return this.baseURL + "/user/register";
    }

    public getArticleType = () => {
        return this.baseURL + "/article/type";
    }

    public getArticleSubType = (id: number) => {
        return this.baseURL + `/article/subtype/${id}`;
    }

    public getPublicArticles = () => {
        return this.baseURL + "/article/public";
    }

    public addArticle = () => {
        return this.baseURL + "/article/add";
    }

    public getArticleById = () => {
        return this.baseURL + "/article";
    }

    public getSubsidiariesByArticleId = (id: string) => {
        return this.baseURL + `/subsidiary/${id}`;
    }

    public getMyArticles = (id: string) => {
        return this.baseURL + `/article/mine/${id}`;
    }

    public getMySendedInvitations = (id: string) => {
        return this.baseURL + `/invitation/send/${id}`;
    }

    public getMyReceivedInvitations = (id: string) => {
        return this.baseURL + `/invitation/receive/${id}`;
    }

    public updateMyReceivedInvitationStatus = (id: string, status: InvitationStatusType) => {
        return this.baseURL + `/invitation/receive/${id}/status/${status}`;
    }

    public cancelMySendedInvitation = (id: string) => {
        return this.baseURL + `/invitation/send/delete/${id}`;
    }
}