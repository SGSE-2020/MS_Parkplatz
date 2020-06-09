import {GetUserInformation} from "./user/GetUserInformation";
import {userService} from "../services/grpc/UserService";
import {GetAllUserReservations} from "./reservation/GetAllUserReservations";
import {reservationService} from "../services/implementation/ReservationService";
import {DeleteReservations} from "./reservation/DeleteReservations";
import {CreateReservation} from "./reservation/CreateReservation";

export const CONTROLLERS = [
    // User
    new GetUserInformation(userService),

    // Reservation
    new CreateReservation(reservationService),
    new GetAllUserReservations(reservationService),
    new DeleteReservations(reservationService)
    // new CreateReservation()
    // new GetReservationById()
];
