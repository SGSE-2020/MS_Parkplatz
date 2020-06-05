export class UserService{
    public async getUserInformation(): Promise<any> {
        return "okok";
    }
}

export const userService = new UserService();
