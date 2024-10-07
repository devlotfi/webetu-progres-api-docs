import { ApiProperty } from '@nestjs/swagger';

export class UserUUIDDiaParams {
  @ApiProperty()
  public userUUID: string;

  @ApiProperty()
  public diaId: string;
}
