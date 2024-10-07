import { ApiProperty } from '@nestjs/swagger';

export class UserUUIDAnneeAcademiqueParams {
  @ApiProperty()
  public userUUID: string;

  @ApiProperty()
  public anneeAcademiqueId: string;
}
