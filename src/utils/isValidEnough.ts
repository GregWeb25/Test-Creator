export const isValid = (inputText: string) => {
    const value = Number(inputText);

    if(!isNaN(value)&& value <= 100 && value > 0){
        return true;
    } else return false;
}