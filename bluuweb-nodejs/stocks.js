const stocks = [
    {
        "name": "AAPL",
        "Price": "123.45",
        "beta": "1.23",
        "Mrkt Cap": "1.5e12",
        "Cash": "1000000000",
        "Year": "1980",
        "Debt": "5000000000"
    },
    {
        "name": "GOOGL",
        "Price": "678.90",
        "beta": "0.98",
        "Mrkt Cap": "1.2e12",
        "Cash": "2000000000",
        "Year": "2004",
        "Debt": "3000000000"
    },
    {
        "name": "AMZN",
        "Price": "987.65",
        "beta": "1.54",
        "Mrkt Cap": "1.8e12",
        "Cash": "1500000000",
        "Year": "1997",
        "Debt": "4000000000"
    },
    {
        "name": "MSFT",
        "Price": "543.21",
        "beta": "0.76",
        "Mrkt Cap": "1.4e12",
        "Cash": "3000000000",
        "Year": "1986",
        "Debt": "2000000000"
    },
    {
        "name": "TSLA",
        "Price": "321.98",
        "beta": "2.34",
        "Mrkt Cap": "1.6e12",
        "Cash": "2500000000",
        "Year": "2010",
        "Debt": "3500000000"
    },
    {
        "name": "FB",
        "Price": "876.54",
        "beta": "1.87",
        "Mrkt Cap": "1.3e12",
        "Cash": "5000000000",
        "Year": "2012",
        "Debt": "1000000000"
    },
    {
        "name": "JPM",
        "Price": "109.87",
        "beta": "0.65",
        "Mrkt Cap": "1.1e12",
        "Cash": "4000000000",
        "Year": "1980",
        "Debt": "6000000000"
    },
    {
        "name": "BAC",
        "Price": "543.21",
        "beta": "1.23",
        "Mrkt Cap": "1.2e12",
        "Cash": "3500000000",
        "Year": "1980",
        "Debt": "3000000000"
    },
    {
        "name": "WFC",
        "Price": "987.65",
        "beta": "0.98",
        "Mrkt Cap": "1.3e12",
        "Cash": "4500000000",
        "Year": "1980",
        "Debt": "2500000000"
    },
    {
        "name": "C",
        "Price": "321.98",
        "beta": "1.54",
        "Mrkt Cap": "1.4e12",
        "Cash": "5500000000",
        "Year": "1980",
        "Debt": "2000000000"
    },
    {
        "name": "V",
        "Price": "876.54",
        "beta": "2.34",
        "Mrkt Cap": "1.5e12",
        "Cash": "6500000000",
        "Year": "2008",
        "Debt": "1500000000"
    },
    {
        "name": "JNJ",
        "Price": "109.87",
        "beta": "1.87",
        "Mrkt Cap": "1.6e12",
        "Cash": "7500000000",
        "Year": "1980",
        "Debt": "1000000000"
    },
    {
        "name": "PFE",
        "Price": "543.21",
        "beta": "0.65",
        "Mrkt Cap": "1.7e12",
        "Cash": "8500000000",
        "Year": "1980",
        "Debt": "5000000000"
    },
    {
        "name": "MRK",
        "Price": "987.65",
        "beta": "1.23",
        "Mrkt Cap": "1.8e12",
        "Cash": "9500000000",
        "Year": "1980",
        "Debt": "4000000000"
    },
    {
        "name": "XOM",
        "Price": "321.98",
        "beta": "0.98",
        "Mrkt Cap": "1.9e12",
        "Cash": "10500000000",
        "Year": "1980",
        "Debt": "3500000000"
    },
    {
        "name": "CVX",
        "Price": "876.54",
        "beta": "1.54",
        "Mrkt Cap": "2e12",
        "Cash": "11500000000",
        "Year": "1980",
        "Debt": "3000000000"
    },
    {
        "name": "KO",
        "Price": "109.87",
        "beta": "2.34",
        "Mrkt Cap": "2.1e12",
        "Cash": "12500000000",
        "Year": "1980",
        "Debt": "2500000000"
    },
    {
        "name": "PEP",
        "Price": "543.21",
        "beta": "1.87",
        "Mrkt Cap": "2.2e12",
        "Cash": "13500000000",
        "Year": "1980",
        "Debt": "2000000000"
    },
    {
        "name": "WMT",
        "Price": "987.65",
        "beta": "0.65",
        "Mrkt Cap": "2.3e12",
        "Cash": "14500000000",
        "Year": "1972",
        "Debt": "1500000000"
    },
    {
        "name": "TGT",
        "Price": "321.98",
        "beta": "1.23",
        "Mrkt Cap": "2.4e12",
        "Cash": "15500000000",
        "Year": "1980",
        "Debt": "1000000000"
    },
    {
        "name": "HD",
        "Price": "876.54",
        "beta": "0.98",
        "Mrkt Cap": "2.5e12",
        "Cash": "16500000000",
        "Year": "1980",
        "Debt": "5000000000"
    },
    {
        "name": "LOW",
        "Price": "109.87",
        "beta": "1.54",
        "Mrkt Cap": "2.6e12",
        "Cash": "17500000000",
        "Year": "1980",
        "Debt": "4000000000"
    },
    {
        "name": "MCD",
        "Price": "543.21",
        "beta": "2.34",
        "Mrkt Cap": "2.7e12",
        "Cash": "18500000000",
        "Year": "1965",
        "Debt": "3500000000"
    },
    {
        "name": "SBUX",
        "Price": "987.65",
        "beta": "1.87",
        "Mrkt Cap": "2.8e12",
        "Cash": "19500000000",
        "Year": "1992",
        "Debt": "3000000000"
    },
    {
        "name": "NKE",
        "Price": "321.98",
        "beta": "0.65",
        "Mrkt Cap": "2.9e12",
        "Cash": "20500000000",
        "Year": "1980",
        "Debt": "2500000000"
    },
    {
        "name": "AAPL",
        "Price": "123.45",
        "beta": "1.23",
        "Mrkt Cap": "1.5e12",
        "Cash": "1000000000",
        "Year": "1980",
        "Debt": "5000000000"
    },
    {
        "name": "GOOGL",
        "Price": "678.90",
        "beta": "0.98",
        "Mrkt Cap": "1.2e12",
        "Cash": "2000000000",
        "Year": "2004",
        "Debt": "3000000000"
    },
    {
        "name": "AMZN",
        "Price": "987.65",
        "beta": "1.54",
        "Mrkt Cap": "1.8e12",
        "Cash": "1500000000",
        "Year": "1997",
        "Debt": "4000000000"
    },
    {
        "name": "MSFT",
        "Price": "543.21",
        "beta": "0.76",
        "Mrkt Cap": "1.4e12",
        "Cash": "3000000000",
        "Year": "1986",
        "Debt": "2000000000"
    },
    {
        "name": "TSLA",
        "Price": "321.98",
        "beta": "2.34",
        "Mrkt Cap": "1.6e12",
        "Cash": "2500000000",
        "Year": "2010",
        "Debt": "3500000000"
    },
    {
        "name": "FB",
        "Price": "876.54",
        "beta": "1.87",
        "Mrkt Cap": "1.3e12",
        "Cash": "5000000000",
        "Year": "2012",
        "Debt": "1000000000"
    },
    {
        "name": "JPM",
        "Price": "109.87",
        "beta": "0.65",
        "Mrkt Cap": "1.1e12",
        "Cash": "4000000000",
        "Year": "1980",
        "Debt": "6000000000"
    },
    {
        "name": "BAC",
        "Price": "543.21",
        "beta": "1.23",
        "Mrkt Cap": "1.2e12",
        "Cash": "3500000000",
        "Year": "1980",
        "Debt": "3000000000"
    },
    {
        "name": "WFC",
        "Price": "987.65",
        "beta": "0.98",
        "Mrkt Cap": "1.3e12",
        "Cash": "4500000000",
        "Year": "1980",
        "Debt": "2500000000"
    },
    {
        "name": "C",
        "Price": "321.98",
        "beta": "1.54",
        "Mrkt Cap": "1.4e12",
        "Cash": "5500000000",
        "Year": "1980",
        "Debt": "2000000000"
    },
    {
        "name": "V",
        "Price": "876.54",
        "beta": "2.34",
        "Mrkt Cap": "1.5e12",
        "Cash": "6500000000",
        "Year": "2008",
        "Debt": "1500000000"
    },
    {
        "name": "JNJ",
        "Price": "109.87",
        "beta": "1.87",
        "Mrkt Cap": "1.6e12",
        "Cash": "7500000000",
        "Year": "1980",
        "Debt": "1000000000"
    },
    {
        "name": "PFE",
        "Price": "543.21",
        "beta": "0.65",
        "Mrkt Cap": "1.7e12",
        "Cash": "8500000000",
        "Year": "1980",
        "Debt": "5000000000"
    },
    {
        "name": "MRK",
        "Price": "987.65",
        "beta": "1.23",
        "Mrkt Cap": "1.8e12",
        "Cash": "9500000000",
        "Year": "1980",
        "Debt": "4000000000"
    }
]

function formattingStocks(datos) {
    return datos.map((stock) => {
        return {
            ...stock,
            Price: parseFloat(stock.Price),
            beta: parseFloat(stock.beta),
            "Mrkt Cap": parseFloat(stock['Mrkt Cap']),
            Cash: parseFloat(stock.Cash),
            Year: parseInt(stock.Year),
            Debt: parseFloat(stock.Debt)
        };
    });
}

const dataFormatted = formattingStocks(stocks)

console.table(dataFormatted)