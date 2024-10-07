import { ApiProperty } from '@nestjs/swagger';

export class DiaParams {
  @ApiProperty()
  public diaId: string;
}
