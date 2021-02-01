// const wsConnection = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest')

export interface Rate {
    currentRate: number,
    date: Date
}

const getRate = async () => {
    try {
        const response = await fetch('https://api.tradingeconomics.com/markets/currency?c=guest:guest&format=json')

        const json = await response.json()

        const rates: string[][] = json.map( (rate: { [s: string]: unknown } ) => Object.entries(rate))
        const rate: string[] = rates.find(rate => rate[0][1] === "EURUSD:CUR")!

        return ({currentRate: Number(rate[6][1]), date: new Date(rate[4][1])})
    } catch(error) {
        return undefined
    }

    // wsConnection.onopen = () => wsConnection.send('{"topic": "subscribe", "to": "EURUSD:CUR"}')
    // wsConnection.onmessage = (message) => console.log(message)
}

export default getRate

