import {BaseController} from "../BaseController";
import {RestServer} from "../../server/RestServer";
import {UserService} from "../../services/grpc/UserService";

export class GetUserInformation extends BaseController {
    private userService : UserService;

    public initialize(httpServer: RestServer): void {
        httpServer.get('/user', this.execute.bind(this));
    }

    public constructor (userService: UserService) {
        super();
        this.userService = userService;
    }

    protected async executeImpl(): Promise<any> {
        try {
            const jwt = this.req.header('Authorization');
            // const newsletterEntity: NewsletterEntity = await this.userService.getUserInformation();
            // const newsletterDTO: NewsletterDTO = newsletterMapper.toDTO(newsletterEntity);
            // return await this.ok<NewsletterDTO>(this.res, newsletterDTO);
            return jwt;
        } catch (err) {
            return this.fail(err);
        }
    }
}
