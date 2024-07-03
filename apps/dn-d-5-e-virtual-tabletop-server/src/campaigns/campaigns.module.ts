import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CampaignsModuleBase } from "./base/campaigns.module.base";
import { CampaignsService } from "./campaigns.service";
import { CampaignsController } from "./campaigns.controller";
import { CampaignsResolver } from "./campaigns.resolver";

@Module({
  imports: [CampaignsModuleBase, forwardRef(() => AuthModule)],
  controllers: [CampaignsController],
  providers: [CampaignsService, CampaignsResolver],
  exports: [CampaignsService],
})
export class CampaignsModule {}
