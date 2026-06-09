import pandas as pd

def find_managers(employee: pd.DataFrame) -> pd.DataFrame:
    
    managers = employee.groupby('managerId').size()
    
    manager_ids = managers[managers >= 5].index
    
    return employee[employee['id'].isin(manager_ids)][['name']]