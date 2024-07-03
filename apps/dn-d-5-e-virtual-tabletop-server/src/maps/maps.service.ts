import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapsServiceBase } from "./base/maps.service.base";

@Injectable()
export class MapsService extends MapsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
