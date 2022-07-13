import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidator (conntrol:AbstractControl):{[key:string]: boolean} | null{
    const password = conntrol.get('password');
    const rePassword = conntrol.get('confirmPassword');
    if(password?.pristine||rePassword?.pristine){
        return null;
    }
    return password && rePassword && password.value!==rePassword.value ? {'misMatch':true}:null;
}