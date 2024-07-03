import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MapsService } from "./maps.service";
import { MapsControllerBase } from "./base/maps.controller.base";

@swagger.ApiTags("maps")
@common.Controller("maps")
export class MapsController extends MapsControllerBase {
  constructor(
    protected readonly service: MapsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
