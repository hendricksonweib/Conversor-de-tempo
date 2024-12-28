const inputTime = document.getElementById("inputTime")
const convertButton = document.getElementById("convert")
const SelectTimeNow = document.getElementById("tempo")
const SelectTimeBefore = document.getElementById("conversor")

convertButton.addEventListener("click", function () {
    const timeValue = inputTime.value
    const TimeNowValue = SelectTimeNow.value
    const TimeBeforeValue = SelectTimeBefore.value

    const valores = TimeNowValue + TimeBeforeValue

    switch (valores) {
        case "segundossegundos":
            console.log(timeValue)
            break;
        case "segundosminutos":
            console.log(timeValue / 60)
            break;
        case "segundoshoras":
            console.log(Math.round(timeValue / 3600))
            break;
        case "segundosdias":
            console.log(Math.round(timeValue / 86400))
            break;

        case "minutosminutos":
            console.log(timeValue)
            break;
        case "minutossegundos":
            console.log(timeValue * 60)
            break;
        case "minutoshoras":
            console.log(timeValue / 60)
            break;
        case "minutosdias":
            console.log(timeValue / 1440)
            break;

        case "horashoras":
            console.log(timeValue)
            break;
        case "horassegundos":
            console.log(timeValue * 3600)
            break;
        case "horasminutos":
            console.log(timeValue * 60)
            break;
        case "horasdias":
            console.log(timeValue / 24)
            break;

        case "diasdias":
            console.log(timeValue)
            break;
        case "diassegundos":
            console.log(timeValue * 86400)
            break;
        case "diasminutos":
            console.log(timeValue * 1440)
            break;
        case "diashoras":
            console.log(timeValue * 24)
            break;

        default:
            break;
    }

}
)