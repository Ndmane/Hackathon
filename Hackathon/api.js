const petro = document.getElementById("petro")

async function Api() {
    const respons_petro = await fetch("https://api.open-meteo.com/v1/forecast?latitude=54.887&longitude=69.15&current=temperature_2m")
    const data_petro = await respons_petro.json()
    return data_petro
}

async function output() {
    try{
        let out = await Api()
        console.log(out)
        petro.textContent = `Температура воздуха: ${out[0].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output,10000)
    }
}

output()

