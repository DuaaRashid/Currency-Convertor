# Currency Converter CLI App

This project is a **Currency Converter** command-line interface (CLI) application built using **TypeScript** and **Inquirer.js**. The app allows users to input an amount in Pakistani Rupees (PKR) and convert it into one of several other currencies, providing real-time conversions based on predefined rates.

## Features
- Converts from **PKR** to various currencies, including:
  - Turkish Lira
  - Irani Rial
  - Omani Rial
  - Algerian Dinar
  - Bahraini Dinar
  - Iraqi Dinar
  - Yemeni Rial
  - Jordanian Dinar
  - Kuwaiti Dinar
  - Tunisian Dinar
- Simple, interactive, and user-friendly interface using `inquirer.js` for options.
- Displays the converted value based on the chosen currency and input amount.

## How It Works
1. The user selects the currency they want to convert to from a list of 10 available currencies.
2. The user is prompted to input the amount in **Pakistani Rupees (PKR)**.
3. The app calculates and prints the equivalent amount in the selected currency.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/currency-converter-cli.git
    cd currency-converter-cli
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npx ts-node index.ts
    ```

## Usage

After running the app, the user will be prompted with a list of currencies to convert from PKR. Once a currency is selected, the user inputs the amount they want to convert, and the app will display the converted amount.

Example:
```
Choose currency to convert from PKR to:
> 1) Turkish Lira
> 2) Irani Rial
> 3) Omani Rial
...

Enter amount you want to convert from Rupees to Turkish Lira:
5000

5000 PKR in Turkish Lira is 500.0
```

## Available Currencies and Conversion Rates
- **1) Turkish Lira**: PKR → TL at 0.10
- **2) Irani Rial**: PKR → IR at 148.81
- **3) Omani Rial**: PKR → OR at 0.0014
- **4) Algerian Dinar**: PKR → AD at 0.47
- **5) Bahraini Dinar**: PKR → BD at 0.0013
- **6) Iraqi Dinar**: PKR → ID at 4.62
- **7) Yemeni Rial**: PKR → YR at 0.88
- **8) Jordanian Dinar**: PKR → JD at 0.0025
- **9) Kuwaiti Dinar**: PKR → KD at 0.0011
- **10) Tunisian Dinar**: PKR → TD at 0.011

## Dependencies

- [prompt-sync](https://www.npmjs.com/package/prompt-sync): For synchronous input collection.
- [inquirer](https://www.npmjs.com/package/inquirer): For interactive command-line prompts.

## License

This project is licensed under the MIT License.
