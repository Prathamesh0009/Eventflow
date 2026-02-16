/**
 * PURPOSE: Global Prisma module that exports PrismaService for dependency injection.
 * USE: Import PrismaModule in AppModule (or any module that needs DB access).
 * NEED: Required so services can inject PrismaService to access the database.
 */

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
