const getECTS = (count: number) => {
    switch (true) {
        case (count < 50):
            return "F"
            break;
        case (count >= 50 && count <= 54):
            return "D"
            break;
        case (count >= 55 && count <= 59):
            return "D+"
            break;
        case (count >= 60 && count <= 64):
            return "C-"
            break;
        case (count >= 65 && count <= 69):
            return "C"
            break;
        case (count >= 70 && count <= 74):
            return "C+"
            break;
        case (count >= 75 && count <= 79):
            return "B-"
            break;
        case (count >= 80 && count <= 84):
            return "B"
            break;
        case (count >= 85 && count <= 89):
            return "B+"
            break;
        case (count >= 90 && count <= 94):
            return "A-"
            break;
        case (count >= 95 && count <= 100):
            return "A"
            break;
    }
}

export default getECTS;