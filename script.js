const inputTime = document.getElementById("inputTime")
const convertButton = document.getElementById("convert")
const SelectTimeNow = document.getElementById("tempo")
const SelectTimeBefore = document.getElementById("conversor")
const resultElement = document.getElementById("result")

convertButton.addEventListener("click", function () {
    const timeValue = inputTime.value
    const TimeNowValue = SelectTimeNow.value
    const TimeBeforeValue = SelectTimeBefore.value

    const valores = TimeNowValue + TimeBeforeValue

    switch (valores) {
        case "segundossegundos":
            resultElement.textContent = timeValue
            break;
        case "segundosminutos":
            resultElement.textContent = timeValue / 60
            break;
        case "segundoshoras":
            resultElement.textContent = Math.round(timeValue / 3600)
            break;
        case "segundosdias":
            resultElement.textContent = Math.round(timeValue / 86400)
            break;
        case "minutosminutos":
            resultElement.textContent = timeValue
            break;
        case "minutossegundos":
            resultElement.textContent = timeValue * 60
            break;
        case "minutoshoras":
            resultElement.textContent = timeValue / 60
            break;
        case "minutosdias":
            resultElement.textContent = timeValue / 1440
            break;
        case "horashoras":
            resultElement.textContent = timeValue
            break;
        case "horassegundos":
            resultElement.textContent = timeValue * 3600
            break;
        case "horasminutos":
            resultElement.textContent = timeValue * 60
            break;
        case "horasdias":
            resultElement.textContent = timeValue / 24
            break;
        case "diasdias":
            resultElement.textContent = timeValue
            break;
        case "diassegundos":
            resultElement.textContent = timeValue * 86400
            break;
        case "diasminutos":
            resultElement.textContent = timeValue * 1440
            break;
        case "diashoras":
            resultElement.textContent = timeValue * 24
            break;

        default:
            break;
    }

}
)