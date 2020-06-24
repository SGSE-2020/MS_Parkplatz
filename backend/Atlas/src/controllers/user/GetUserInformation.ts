import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {UserService} from "../../services/grpc/UserService";
import {User} from "../../proto/user_pb";
import {UserDTO} from "../../models/dto/UserDTO";

export class GetUserInformation extends BaseController {
    private userService: UserService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/users', this.execute.bind(this));
    }

    public constructor(userService: UserService) {
        super();
        this.userService = userService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            // @ts-ignore
            const userUid = this.req.userUid;
            const result = await this.userService.gRpcWrapper(userUid)
            let user = (<User>result)
            let userDTO: UserDTO = {
                firstName: user.getFirstname(),
                lastName: user.getLastname(),
                username: user.getNickname()
            }

            return await this.ok(this.res, userDTO);
        } catch (err) {
            return this.fail(err);
        }
    }
}

