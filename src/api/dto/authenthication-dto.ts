import { ApiProperty } from '@nestjs/swagger';

export class AuthenticationDTO {
  @ApiProperty()
  public username: string;

  @ApiProperty()
  public password: string;
}
