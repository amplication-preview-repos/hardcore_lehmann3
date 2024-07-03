import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CharactersServiceBase } from "./base/characters.service.base";

@Injectable()
export class CharactersService extends CharactersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
