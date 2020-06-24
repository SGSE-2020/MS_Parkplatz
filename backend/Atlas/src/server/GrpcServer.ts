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

export class ParkplatzServer implements IParkplatzServer {
    expulsion(call: ServerUnaryCall<ExpulsionRequest>, callback: sendUnaryData<AreaDetails>): void {
        // callback(null, new grpc.Response());
    }

    provision(call: ServerUnaryCall<AreaRequest>, callback: sendUnaryData<AreaDetails>): void {
    }

    reservation(call: ServerUnaryCall<ReservationRequest>, callback: sendUnaryData<ReservationDetails>): void {
    }

    termination(call: ServerUnaryCall<TerminationRequest>, callback: sendUnaryData<ReservationDetails>): void {
    }

    utilization(call: ServerWritableStream<UtilizationRequest>): void {
        let parkingAreaService = new ParkingAreaService();
        parkingAreaService.getAllParkingAreas().then( response => {
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
