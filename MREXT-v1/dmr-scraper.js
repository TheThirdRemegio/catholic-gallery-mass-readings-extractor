const dmrday = document.querySelectorAll('.dmrday')
const dmrds = document.querySelectorAll('.dmrds')

const dmrrs = document.querySelectorAll('.dmrrs')

dmrrs.forEach((div, i) => {
    let firstReading = div.querySelector('a:nth-of-type(1)')
    if (firstReading != null) {
        firstText = firstReading.textContent
        secondText = firstReading.nextElementSibling.textContent
        textTotal = firstText + secondText

        // Check textTotal in console
        console.log(textTotal)

        // Add to table
        let row = document.querySelector('#row-' + (i + 1))
        if (row) {
            const cell = row.querySelector('.cell-3')
            let x = document.createElement('span')
            x.innerText = textTotal
            cell.appendChild(x)
        } else {
            console.log("Error: Row not found for index: " + i)
        }
    } else {
        console.log("Error: firstReading variable is null.")
    }

    let secondReading = div.querySelector('a:nth-of-type(2)')
    if (secondReading != null) {
        firstText = secondReading.textContent
        secondText = secondReading.nextElementSibling.textContent
        textTotal = firstText + secondText

        // Check textTotal in console
        console.log(textTotal)

        // Add to table
        let row = document.querySelector('#row-' + (i + 1))
        if (row) {
            const cell = row.querySelector('.cell-4')
            let x = document.createElement('span')
            x.innerText = textTotal
            cell.appendChild(x)
        } else {
            console.log("Error: Row not found for index: " + i)
        }
    } else {
        console.log("Error: secondReading variable is null.")
    }

    let thirdReading = div.querySelector('a:nth-of-type(3)')
    if (thirdReading != null) {
        firstText = thirdReading.textContent
        secondText = thirdReading.nextElementSibling.textContent
        textTotal = firstText + secondText

        // Check textTotal in console
        console.log(textTotal)

        // Add to table
        let row = document.querySelector('#row-' + (i + 1))
        if (row) {
            const cell = row.querySelector('.cell-5')
            let x = document.createElement('span')
            x.innerText = textTotal
            cell.appendChild(x)
        } else {
            console.log("Error: Row not found for index: " + i)
        }
    } else {
        console.log("Error: thirdReading variable is null.")
    }

    let fourthReading = div.querySelector('a:nth-of-type(4)')
    if (fourthReading != null) {
        firstText = fourthReading.textContent
        secondText = fourthReading.nextElementSibling.textContent
        textTotal = firstText + secondText

        // Check textTotal in console
        console.log(textTotal)

        // Add to table
        let row = document.querySelector('#row-' + (i + 1))
        if (row) {
            const cell = row.querySelector('.cell-6')
            let x = document.createElement('span')
            x.innerText = textTotal
            cell.appendChild(x)
        } else {
            console.log("Error: Row not found for index: " + i)
        }
    } else {
        console.log("Error: fourthReading variable is null.")
    }

    let fifthReading = div.querySelector('a:nth-of-type(5)')
    if (fifthReading != null) {
        firstText = fifthReading.textContent
        secondText = fifthReading.nextElementSibling.textContent
        textTotal = firstText + secondText

        // Check textTotal in console
        console.log(textTotal)

        // Add to table
        let row = document.querySelector('#row-' + (i + 1))
        if (row) {
            const cell = row.querySelector('.cell-7')
            let x = document.createElement('span')
            x.innerText = textTotal
            cell.appendChild(x)
        } else {
            console.log("Error: Row not found for index: " + i)
        }
    } else {
        console.log("Error: fifthReading variable is null.")
    }

    i++
    return
})

// dmrday into Date
dmrday.forEach((date, i) => {
    let row = document.querySelector('#row-' + (i + 1))
    if (row) {
        const cell = row.querySelector('.cell-1')
        cell.appendChild(date)
    } else {
        console.log("Error: Row not found for index: " + i)
    }
    
    i++
    return
})

// dmrds into Type of Mass
dmrds.forEach((desc, i) => {
    let row = document.querySelector('#row-' + (i + 1))
    if (row) {
        const cell = row.querySelector('.cell-2')
        cell.appendChild(desc)
    } else {
        console.log("Error: Row not found for index: " + i)
    }
    
    i++
    return
})