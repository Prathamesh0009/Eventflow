/**
 * PURPOSE: NestJS injectable Prisma client with lifecycle hooks for connect/disconnect.
 * USE: Injected in modules that need DB access; use this.prisma.* in services.
 * NEED: Single shared PrismaClient instance and clean shutdown (Phase 1).
 */

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  /** Connect to the database when the module is initialized. */
  async onModuleInit() {
    await this.$connect();
  }

  /** Disconnect when the application shuts down. */
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
