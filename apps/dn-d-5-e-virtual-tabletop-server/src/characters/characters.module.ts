import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CharactersModuleBase } from "./base/characters.module.base";
import { CharactersService } from "./characters.service";
import { CharactersController } from "./characters.controller";
import { CharactersResolver } from "./characters.resolver";

@Module({
  imports: [CharactersModuleBase, forwardRef(() => AuthModule)],
  controllers: [CharactersController],
  providers: [CharactersService, CharactersResolver],
  exports: [CharactersService],
})
export class CharactersModule {}
