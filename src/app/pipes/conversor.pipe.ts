import { Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(value: string, por: string): string {
        let value_one = parseInt(value);
        let value_two = parseInt(por);
        let result = `La multiplicación: ${value_one}x${value_one} = ${value_one*value_two}`;

        return result;
    }
}
