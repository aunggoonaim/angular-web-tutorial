export interface UserModel {
    id: number;
    firstname: string;
    lastname: string;
    user_role_id: number;
    email: string;
    password_hash: string;
    is_actived: boolean;
    user_role?: any;
}      