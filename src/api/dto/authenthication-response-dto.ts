import { ApiProperty } from '@nestjs/swagger';

export class AuthenticationResponseDTO {
  @ApiProperty({
    description: 'The jwt token used to access the api',
  })
  public token: string;

  @ApiProperty()
  public userId: number;

  @ApiProperty()
  public uuid: string;

  @ApiProperty()
  public idIndividu: number;

  @ApiProperty({
    description: 'University or school ID',
  })
  public etablissementId: number;

  @ApiProperty({
    description: 'The username used to login (Usually Student ID)',
  })
  public userName: string;
}
