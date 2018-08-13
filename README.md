**Swapi pitstop calculator**

Finding for all SW star ships, to cover a given distance, how many stops for resupply are required.

The problem was solved by taking the 'consumables' attribute from the api for each starship and converting to hours which can then be multipled by the 'MGLT' attribute to give total distance the starship can travel in one go, we divide that then by the user inputted distance ( rounding down - the last stop being the destination. ) to get the amount of times the starship has to stop and refuel on the given journey. 


**Using the application**

Run code in any browser using scratch js or similar. The app will ask for a number input the results are returned in the console log.


**Future improvements & options**

- Output results in a html document
- Use a framework like jQuery/ Angular /React to output the results as the user inputs in form field.
