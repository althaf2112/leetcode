import pandas as pd

def largest_orders(orders: pd.DataFrame) -> pd.DataFrame:
    return (
        orders['customer_number']
        .value_counts()
        .head(1)
        .rename_axis('customer_number')
        .reset_index(name='count')[['customer_number']]
    )