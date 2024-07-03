import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CharactersService } from "./characters.service";
import { CharactersControllerBase } from "./base/characters.controller.base";

@swagger.ApiTags("characters")
@common.Controller("characters")
export class CharactersController extends CharactersControllerBase {
  constructor(
    protected readonly service: CharactersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
