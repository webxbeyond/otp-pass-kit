import type {Options} from './types';
// ---------------------------------------
export function generateOtp (length : number = 6, options?: Options) : string {
    const defaultOptions : Options = {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
        digits: true,
        ...options
    }

    const digitSet = '0123456789';
    const lowerCaseAlphabetsSet = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseAlphabetsSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharsSet = '!@#$%^&*';

    let characterPool = '';
    
    if (defaultOptions.digits) {
        characterPool += digitSet;
    }

    if (defaultOptions.lowerCaseAlphabets) {
        characterPool += lowerCaseAlphabetsSet;
    }

    if (defaultOptions.upperCaseAlphabets) {
        characterPool += upperCaseAlphabetsSet;
    }

    if (defaultOptions.specialChars) {
        characterPool += specialCharsSet;
    }

    //  Fallback if no character set is selected

    if (!characterPool)
        throw new Error ("Please select at least one character set")

    // Generate Otp

    let otp = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length)
        otp += characterPool[randomIndex]
    }

    return otp;
    
}

export function generatePass (length : number = 8, options?: Options) : string {

    const defaultOptions : Options = {
        lowerCaseAlphabets: true,
        upperCaseAlphabets: true,
        specialChars: true,
        digits: true,
        ...options
    }

    const digitSet = '0123456789';
    const lowerCaseAlphabetsSet = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseAlphabetsSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharsSet = '!@#$%^&*';

    let characterPool = '';
    
    if (defaultOptions.digits) {
        characterPool += digitSet;
    }

    if (defaultOptions.lowerCaseAlphabets) {
        characterPool += lowerCaseAlphabetsSet;
    }

    if (defaultOptions.upperCaseAlphabets) {
        characterPool += upperCaseAlphabetsSet;
    }

    if (defaultOptions.specialChars) {
        characterPool += specialCharsSet;
    }

    //  Fallback if no character set is selected

    if (!characterPool)
        throw new Error ("Please select at least one character set")

    // Generate Otp

    let pass = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length)
        pass += characterPool[randomIndex]
    }

    return pass;
    
}