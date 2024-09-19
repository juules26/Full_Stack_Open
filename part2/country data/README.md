1. create component folder
    - Filter.jsx
        FilterCountry { search, setSearch }
        * find countries input

2. create services folder
    - countrydataServices.jsx (GET)
    - fetch data from url

3. App.jsx
    - useState for:
        * countries
        * search
        * filtered countries
    - useEffect:
        * get country data
            and handle error
        * filter countries
---------------------------------
Now the code should show only the filtered countries
---------------------------------
    ONLY SHOW COUNTRIES IF:
    + 10 show message
    + 10 && - 1 show countries
    only 1 show basic info
1. create ShowCountries.jsx
    - conditions
