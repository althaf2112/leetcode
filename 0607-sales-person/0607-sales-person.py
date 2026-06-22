import pandas as pd

def sales_person(sales_person: pd.DataFrame,
                 company: pd.DataFrame,
                 orders: pd.DataFrame) -> pd.DataFrame:

    # Find salespersons who have orders with company "RED"
    red_sales_ids = orders[
        orders['com_id'].isin(
            company[company['name'] == 'RED']['com_id']
        )
    ]['sales_id']

    # Select salespersons who did not sell to "RED"
    result = sales_person[
        ~sales_person['sales_id'].isin(red_sales_ids)
    ][['name']]

    return result