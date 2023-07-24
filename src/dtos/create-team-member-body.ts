import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'The member name should be longer than or equal to 5 characters',
  })
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.',
  })
  function: string;
}
