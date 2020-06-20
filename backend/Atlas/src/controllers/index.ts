import {GetUserInformation} from "./user/GetUserInformation";
import {userService} from "../services/grpc/UserService";
import {GetAllUserReservations} from "./reservation/GetAllUserReservations";
import {reservationService} from "../services/implementation/ReservationService";
import {CreateReservation} from "./reservation/CreateReservation";
import {GetAllParkingAreas} from "./area/GetAllParkingAreas";
import {parkingAreaService} from "../services/implementation/ParkingAreaService";
import {CancelReservations} from "./reservation/CancelReservations";

export const CONTROLLERS = [
    // User
    new GetUserInformation(userService),

    // Reservation
    new CreateReservation(reservationService),
    new GetAllUserReservations(reservationService),
    new CancelReservations(reservationService),

    // ParkingArea
    new GetAllParkingAreas(parkingAreaService)
];
