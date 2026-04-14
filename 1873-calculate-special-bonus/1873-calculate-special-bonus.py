import pandas as pd

def calculate_special_bonus(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.assign(
        bonus=lambda x: x['salary'].where(
            (x['employee_id'] % 2 == 1) & (~x['name'].str.startswith('M')), 0
        )
    )[["employee_id", "bonus"]].sort_values(by="employee_id")