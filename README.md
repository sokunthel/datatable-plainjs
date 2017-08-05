## DataTable using plain Javascript

Build a data table that does the following:

1. Pull in a dataset from AJAX; feel free to build a fake dataset (JSON, XML, or custom) for testing purposes
2. Support the following key functionality:
    1. Sorting
    2. Pagination
    3. Show/hide columns
    4. Search
    5. Ability to edit/save any of the cells
    6. Provide some basic styling, so it looks decent
    7. Build logic that will help with performance
        - if dataset is less than or equal to 100 rows, then pull data from the client side (stored data)
        - if dataset is greater than 100, then pull via API/service
