import pandas as pd

def rearrange_products_table(Products: pd.DataFrame) -> pd.DataFrame:
    df = Products.melt(
        id_vars=['product_id'],
        var_name='store',
        value_name='price'
    )

    df = df[df['price'].notna()]

    return df