import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(conntrol:AbstractControl):{[key:string]: any} |null{
//     const forbidden = /admin/.test(conntrol.value);
//     return forbidden?{'forbiddenName':{value:conntrol.value}}:null;
// }
export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
    return (conntrol:AbstractControl):{[key:string]: any} |null=>{
        const forbidden = forbiddenName.test(conntrol.value);;
        return forbidden?{'forbiddenName':{value:conntrol.value}}:null;
    }
}