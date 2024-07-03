import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CampaignsResolverBase } from "./base/campaigns.resolver.base";
import { Campaigns } from "./base/Campaigns";
import { CampaignsService } from "./campaigns.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Campaigns)
export class CampaignsResolver extends CampaignsResolverBase {
  constructor(
    protected readonly service: CampaignsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
