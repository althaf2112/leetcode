import pandas as pd

def delete_duplicate_emails(Person: pd.DataFrame) -> None:
    Person.drop(
        Person.index.difference(
            Person.groupby('email')['id'].idxmin()
        ),
        inplace=True
    )