import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, n: int) -> pd.DataFrame:
    # Handle invalid n
    if n <= 0:
        return pd.DataFrame({f'getNthHighestSalary({n})': [None]})
    
    salaries = employee['salary'].drop_duplicates().sort_values(ascending=False)
    
    if len(salaries) < n:
        return pd.DataFrame({f'getNthHighestSalary({n})': [None]})
    
    return pd.DataFrame({f'getNthHighestSalary({n})': [salaries.iloc[n-1]]})