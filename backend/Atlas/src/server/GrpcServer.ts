import {IParkplatzServer} from "../proto/parkplatz_grpc_pb";
import {sendUnaryData, ServerUnaryCall, ServerWritableStream} from "grpc";
import {
    AreaDetails,
    AreaRequest,
    ExpulsionRequest,
    ReservationDetails,
    ReservationRequest, TerminationRequest, UtilizationDetails, UtilizationRequest
} from "../proto/parkplatz_pb";
import {ParkingAreaService} from "../services/implementation/ParkingAreaService";
import {ParkingAreaEntity} from "../models/entity/ParkingAreaEntity";
import {ReservationEntity} from "../models/entity/ReservationEntity";
import {ReservationService} from "../services/implementation/ReservationService";

export class ParkplatzServer implements IParkplatzServer {
    expulsion(call: ServerUnaryCall<ExpulsionRequest>, callback: sendUnaryData<AreaDetails>): void {
        let parkingAreaService = new ParkingAreaService();
        parkingAreaService.getAreaById(call.request.getAreaid()).then(x => {
            parkingAreaService.delete(x);

            let details = new AreaDetails();
            details.setTotalspots(x.totalSpots);
            details.setAreaid(x.id);
            details.setAmenities(x.amenities);
            details.setCharging(x.charging);
            details.setBar(x.bar);
            details.setFacilities(x.facilities);
            details.setFastFood(x.fast_food);
            details.setFoodDrink(x.food_drink);
            details.setGas(x.gas);
            details.setGrill(x.grill);
            details.setHotel(x.hotel);
            details.setMedicalAid(x.medical_aid);
            details.setShopping(x.shopping);
            details.setHotel(x.hotel);

            callback(null, details);
        }, x => {
            callback(x, null);
        });
    }

    provision(call: ServerUnaryCall<AreaRequest>, callback: sendUnaryData<AreaDetails>): void {
        let parkingAreaService = new ParkingAreaService();

        let newArea = new ParkingAreaEntity()
        newArea.totalSpots = call.request.getAreadetails().getTotalspots();
        newArea.displayName = call.request.getDisplayname();
        newArea.bar = call.request.getAreadetails().getBar();
        newArea.charging = call.request.getAreadetails().getCharging();
        newArea.facilities = call.request.getAreadetails().getFacilities();
        newArea.fast_food = call.request.getAreadetails().getFastFood();
        newArea.food_drink = call.request.getAreadetails().getFoodDrink();
        newArea.grill = call.request.getAreadetails().getGrill();
        newArea.gas = call.request.getAreadetails().getGas();
        newArea.hotel = call.request.getAreadetails().getHotel();
        newArea.medical_aid = call.request.getAreadetails().getMedicalAid();
        newArea.shopping = call.request.getAreadetails().getShopping();
        newArea.two_wheeler = call.request.getAreadetails().getTwoWheeler();
        newArea.amenities = call.request.getAreadetails().getAmenities()

        parkingAreaService.save(newArea).then(x => {

            let details = new AreaDetails();
            details.setTotalspots(x.totalSpots);
            details.setAreaid(x.id);
            details.setAmenities(x.amenities);
            details.setCharging(x.charging);
            details.setBar(x.bar);
            details.setFacilities(x.facilities);
            details.setFastFood(x.fast_food);
            details.setFoodDrink(x.food_drink);
            details.setGas(x.gas);
            details.setGrill(x.grill);
            details.setHotel(x.hotel);
            details.setMedicalAid(x.medical_aid);
            details.setShopping(x.shopping);
            details.setHotel(x.hotel);

            callback(null, details);
        }, x => {
            callback(x, null);
        });
    }

    reservation(call: ServerUnaryCall<ReservationRequest>, callback: sendUnaryData<ReservationDetails>): void {
        let reservation = new ReservationEntity();
        reservation.area_id = call.request.getAreaid();
        reservation.user_id = call.request.getUserid();
        reservation.note = 'gRPC request';
        reservation.start_datetime = call.request.getStartdatetime();
        reservation.end_datetime = call.request.getEnddatetime();

        let reservationService = new ReservationService();
        reservationService.save(reservation).then(x => {

            let details = new AreaDetails();
            details.setTotalspots(x.totalSpots);
            details.setAreaid(x.id);
            details.setAmenities(x.amenities);
            details.setCharging(x.charging);
            details.setBar(x.bar);
            details.setFacilities(x.facilities);
            details.setFastFood(x.fast_food);
            details.setFoodDrink(x.food_drink);
            details.setGas(x.gas);
            details.setGrill(x.grill);
            details.setHotel(x.hotel);
            details.setMedicalAid(x.medical_aid);
            details.setShopping(x.shopping);
            details.setHotel(x.hotel);

            let reservationDetails = new ReservationDetails();
            reservationDetails.setReservationid(x.id);
            reservationDetails.setStatus(x.cancelled)

            callback(null, reservationDetails);
        }, x => {
            callback(x, null);
        });

    }

    termination(call: ServerUnaryCall<TerminationRequest>, callback: sendUnaryData<ReservationDetails>): void {
        let reservationService = new ReservationService();
        reservationService.cancelReservation(call.request.getReservationid()).then(x => {

            let details = new AreaDetails();
            details.setTotalspots(x.totalSpots);
            details.setAreaid(x.id);
            details.setAmenities(x.amenities);
            details.setCharging(x.charging);
            details.setBar(x.bar);
            details.setFacilities(x.facilities);
            details.setFastFood(x.fast_food);
            details.setFoodDrink(x.food_drink);
            details.setGas(x.gas);
            details.setGrill(x.grill);
            details.setHotel(x.hotel);
            details.setMedicalAid(x.medical_aid);
            details.setShopping(x.shopping);
            details.setHotel(x.hotel);

            let reservationDetails = new ReservationDetails();
            reservationDetails.setReservationid(x.id);
            reservationDetails.setStatus(x.cancelled)

            callback(null, reservationDetails);
        }, x => {
            callback(x, null);
        });
    }

    utilization(call: ServerWritableStream<UtilizationRequest>): void {
        let parkingAreaService = new ParkingAreaService();
        parkingAreaService.getAllParkingAreas().then(response => {
            let allParkingAreaEntities = response[0];
            allParkingAreaEntities.forEach(x => {
                let utilizationDetails = new UtilizationDetails();
                utilizationDetails.setDisplayname(x.displayName)
                utilizationDetails.setTotalspots(x.totalSpots);
                utilizationDetails.setUtilizedspots(ParkplatzServer.randomIntFromInterval(x.totalSpots, 0));
                call.write(utilizationDetails);
            });

            call.end();
        });
    }

    private static randomIntFromInterval(min, max) {
        return Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
    }
}
