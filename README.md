# Valorant Pro Players Settings Scraper

This repository contains a web scraper built with Puppeteer and TypeScript that retrieves Valorant pro players' settings from prosettings.net. 
The scraper collects data such as mouse hz, DPI, sensitivity, eDPI, and scoped sensitivity for each player and saves it as a JSON file. 
Additionally, it includes a stadistics script in JavaScript to perform calculations and analysis on the collected players'data.


## Running the Scraper and Getting the stadistics

### Step 1: Compile the Typescript code and run the Scraper
Before running the scraper, make sure you have TypeScript installed. 
You can install it globally or locally within your project using the following command:
```npm install -g typescript```
Once TypeScript is installed, follow these steps to compile and run the scraper:
1. In your project directory, open a terminal or command prompt.
2. Run the following command to compile the TypeScript code and start the scraper:
```Bash
tsc && node ./dist/index.js
```
After executing the command, the scraper will launch, and the collected player data will be saved as a JSON file in the repository's root directory.

### Step 2: Retrieve Statistics
Once the JSON file is written successfully, you can obtain statistics by running the following command:
```Typescript
node stadistics.js
```
This command will execute the stadistics script (`stadistics.js`) and display the calculated statistics based on the collected player data.

The statistics include:

- Average eDPI: The average effective DPI (eDPI) calculated from the collected player data.
- DPI Usage: The distribution of DPI usage among the players, showing the count for each DPI setting.
- Average Sensitivity by DPI: The average sensitivity for players using specific DPI settings
