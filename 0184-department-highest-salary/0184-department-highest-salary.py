import pandas as pd

def department_highest_salary(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    
    # Step 1: Find max salary per department
    max_salary = employee.groupby('departmentId')['salary'].max().reset_index()
    
    # Step 2: Merge with employee to get only highest earners
    merged = employee.merge(max_salary, on=['departmentId', 'salary'])
    
    # Step 3: Merge with department to get department names
    result = merged.merge(department, left_on='departmentId', right_on='id')
    
    # Step 4: Select required columns
    return result[['name_y', 'name_x', 'salary']].rename(
        columns={
            'name_y': 'Department',
            'name_x': 'Employee',
            'salary': 'Salary'
        }
    )