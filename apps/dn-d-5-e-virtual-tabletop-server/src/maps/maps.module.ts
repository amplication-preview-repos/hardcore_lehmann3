import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MapsModuleBase } from "./base/maps.module.base";
import { MapsService } from "./maps.service";
import { MapsController } from "./maps.controller";
import { MapsResolver } from "./maps.resolver";

@Module({
  imports: [MapsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MapsController],
  providers: [MapsService, MapsResolver],
  exports: [MapsService],
})
export class MapsModule {}
