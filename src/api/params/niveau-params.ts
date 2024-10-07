import { ApiProperty } from '@nestjs/swagger';

export class NiveauParams {
  @ApiProperty()
  public niveau: string;
}
