import { ApiProperty } from '@nestjs/swagger';

export class UserUUIDParams {
  @ApiProperty()
  public userUUID: string;
}
